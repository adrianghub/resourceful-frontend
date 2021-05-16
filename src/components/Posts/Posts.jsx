import React, { useState } from "react";
import { Grid, CircularProgress } from "@material-ui/core";
import { useSelector } from "react-redux";

import Post from "./Post/Post";
import SearchInput from "../SearchInput/SearchInput";
import CustomModal from "../CustomModal/CustomModal";

import useStyles from "./styles";

export default function Posts() {
  const allPosts = useSelector((state) => state.posts);
  const classes = useStyles();

  const EMPTY_QUERY = "";

  const [filter, setFilter] = useState({
    filteredData: [],
    query: EMPTY_QUERY,
  });
  const [showModal, setShowModal] = useState(false);
  const [dataModel, setDataModal] = useState({
    title: '',
    author: '',
    message: '',
    snippetUrl: '',
    createdAt: new Date(),
    tags: [],
    likeCount: 0,
    selectedFile: '',
  })

  const handleInputChange = (e) => {
    const query = e.target.value;

    const posts = allPosts;

    const filteredData = posts.filter((post) => {

      const { title, tags } = post;

      return (
        (title && title.toLowerCase().includes(query.toLowerCase())) ||
        (tags && tags[0].toLowerCase().includes(query.toLowerCase())));
    });

    console.log(query, filteredData);

    setFilter({
      query,
      filteredData,
    });
  };

  const getModal = (data) => {
    setShowModal(true);
    setDataModal(data);
  }

  const hideModal = () => {
    setShowModal(false);
  }

  const { filteredData, query } = filter;
  const hasSearchResults = filteredData && query !== EMPTY_QUERY;
  const posts = hasSearchResults ? filteredData : allPosts;

  return (
    <>  
      <SearchInput handleInputChange={(e) => handleInputChange(e)} />
      {!posts.length ? (
        <CircularProgress />
      ) : (
        <Grid
          className={classes.mainContainer}
          container
          alignItems="stretch"
          spacing={3}
        >
          {posts.map((post) => (
              <Grid key={post._id} item xs={12} sm={12}>
                <Post
                  post={post}
                  getModal={() => getModal(post)}
                />
              </Grid>
          ))
          }
        <CustomModal
          show={showModal}
          hide={hideModal}
          content={dataModel}
        />
        </Grid>
      )}
    </>
  );
}
