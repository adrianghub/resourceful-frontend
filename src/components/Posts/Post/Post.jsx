import React from "react";

import {
  Card,
  CardActions,
  CardContent,
  CardMedia,
  Button,
  Typography,
} from "@material-ui/core";
import FavoriteIcon from "@material-ui/icons/Favorite";
import FavoriteBorderIcon from "@material-ui/icons/FavoriteBorder";
import DeleteIcon from "@material-ui/icons/Delete";
import Tooltip from "@material-ui/core/Tooltip";
import VisibilityIcon from "@material-ui/icons/Visibility";
import MoreHorizIcon from "@material-ui/icons/MoreHoriz";
import moment from "moment";

import { useDispatch } from "react-redux";

import useStyles from "./styles";
import { deletePost, bookmarkPost } from "../../../actions/posts";

export default function Post({ post, getModal, setCurrentId }) {
  const dispatch = useDispatch();
  const classes = useStyles();
  const user = JSON.parse(localStorage.getItem("profile"));

  const { title, name, createdAt, message, tags, isLiked, selectedFile } = post;

  return (
    <Card className={classes.card}>
      <div className={classes.overlay}>
        <Typography variant="h6">{name}</Typography>
        <Typography variant="body2">{moment(createdAt).fromNow()}</Typography>
      </div>
      {(user?.result?.googleId === post?.author ||
        user?.result?._id === post?.author) && (
        <div className={classes.overlay3}>
          <Button
            size="small"
            onClick={() => setCurrentId(post._id)}
          >
            <MoreHorizIcon fontSize="default" />
          </Button>
        </div>
      )}
      <div className={classes.overlay2}>
        <Button size="small" onClick={getModal}>
          <VisibilityIcon fontSize="default" />
        </Button>
      </div>
      <div className={classes.details}>
        <Typography
          variant="subtitle2"
          color="textSecondary"
          className={classes.tags}
        >
          {tags.map((tag) => `#${tag} `)}
        </Typography>
      </div>
      <Typography className={classes.title} variant="h4">
        {title}
      </Typography>

      <CardContent>
        <Typography variant="body2" color="textSecondary" component="p">
          {message.substring(0, 120) + "..."}
        </Typography>
      </CardContent>
      <CardActions className={classes.cardActions}>
        {user?.result?.googleId || user?.result?._id ? (
          <Button
            size="small"
            color="primary"
            onClick={() => dispatch(bookmarkPost(post._id))}
          >
            {isLiked ? (
              <FavoriteIcon fontSize="small" />
            ) : (
              <FavoriteBorderIcon fontSize="small" />
            )}{" "}
            &nbsp; Bookmark
          </Button>
        ) : (
          <Tooltip title="Available only for logged users">
            <Button size="small">
              <FavoriteBorderIcon fontSize="small" />
              &nbsp; Bookmark
            </Button>
          </Tooltip>
        )}
        {user?.result?.googleId === post?.author ||
        user?.result?._id === post?.author ? (
          <Button
            size="small"
            color="primary"
            onClick={() => dispatch(deletePost(post._id))}
          >
            <DeleteIcon fontSize="small" />
            &nbsp; Delete
          </Button>
        ) : (
          <Tooltip title="Available only for the owner of this post">
            <Button size="small">
              <DeleteIcon fontSize="small" />
              &nbsp; Delete
            </Button>
          </Tooltip>
        )}
      </CardActions>
    </Card>
  );
}
