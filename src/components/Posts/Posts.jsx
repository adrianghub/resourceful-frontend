import React, { useState } from "react";
import { Grid, Button, CircularProgress } from "@material-ui/core";
import { useSelector } from "react-redux";

import Post from "./Post/Post";
import BookmarkedPost from "./Post/BookmarkedPost";
import SearchInput from "../SearchInput/SearchInput";
import CustomModal from "../CustomModal/CustomModal";
import moment from "moment";

import useStyles from "./styles";

export default function Posts({ setCurrentId }) {
  const allPosts = useSelector((state) => state.posts);
  const [favoriteList, setFavoriteList] = useState([]);
  const classes = useStyles();

  const user = JSON.parse(localStorage.getItem("profile"));

  const EMPTY_QUERY = "";

  const [filter, setFilter] = useState({
    filteredData: [],
    query: EMPTY_QUERY,
  });
  const [showModal, setShowModal] = useState(false);
  const [dataModel, setDataModal] = useState({
    title: "",
    name: "",
    message: "",
    snippetUrl: "",
    createdAt: new Date(),
    tags: "",
    isLiked: false,
    selectedFile: "",
  });

  const handleInputChange = (e) => {
    const query = e.target.value;

    const posts = allPosts;

    const filteredData = posts.filter((post) => {
      const { title, tags } = post;

      return (
        (title && title.toLowerCase().includes(query.toLowerCase())) ||
        (tags &&
          tags.find((tag) => tag.toLowerCase().includes(query.toLowerCase())))
      );
    });

    setFilter({
      query,
      filteredData,
    });
  };

  const getModal = (data) => {
    setShowModal(true);
    setDataModal(data);
  };

  const hideModal = () => {
    setShowModal(false);
  };

  const displayFavoriteList = () => {
    const posts = allPosts;

    const filteredData = posts.filter((post) => {
      return post.isLiked;
    });

    setFavoriteList(filteredData);
  };

  const displayAllPosts = () => {
    setFavoriteList([]);
  };

  const { filteredData, query } = filter;
  const hasSearchResults = filteredData && query !== EMPTY_QUERY;
  const posts = hasSearchResults ? filteredData : allPosts;
  const favoritePosts = hasSearchResults ? filteredData : favoriteList;

  return (
    <>
      <SearchInput handleInputChange={(e) => handleInputChange(e)} />
      {(user?.result?.googleId || user?.result?._id) ? (
        <>
          <Button
            className={classes.topButtonLeft}
            onClick={() => displayFavoriteList()}
            color="primary"
            variant="contained"
          >
            BOOKMARKS
          </Button>
          <Button
            className={classes.topButtonRight}
            onClick={() => displayAllPosts()}
            color="primary"
            variant="contained"
          >
            ALL POSTS
          </Button>
        </>
      ) : (
        <>
        <Button
          className={classes.topButtonLeft}
          variant="contained"
          disabled
        >
          BOOKMARKS
        </Button>
        <Button
          className={classes.topButtonRight}
          variant="contained"
          disabled
        >
          ALL POSTS
        </Button>
      </>
      )}
      {user && favoriteList.length ? (
        <Grid
          className={classes.mainContainer}
          container
          alignItems="stretch"
          spacing={3}
        >
          {favoritePosts.map((post) => (
            <Grid key={post._id} item xs={12} sm={12}>
              <BookmarkedPost
                post={post}
                getModal={() => getModal(post)}
                setCurrentId={setCurrentId}
              />
            </Grid>
          ))}
          <CustomModal show={showModal} hide={hideModal} content={dataModel} />
        </Grid>
      ) : !posts.length ? (
        <CircularProgress />
      ) : (
        <Grid
          className={classes.mainContainer}
          container
          alignItems="stretch"
          spacing={3}
        >
          {posts.sort((postA, postB) => moment(postB.createdAt).toDate() - moment(postA.createdAt).toDate()).map((post) => (
            <Grid key={post._id} item xs={12} sm={12}>
              <Post
                post={post}
                getModal={() => getModal(post)}
                setCurrentId={setCurrentId}
              />
            </Grid>
          ))}
          <CustomModal show={showModal} hide={hideModal} content={dataModel} />
        </Grid>
      )}
    </>
  );
}
