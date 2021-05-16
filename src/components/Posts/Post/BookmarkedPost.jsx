import React from "react";

import {
  Card,
  CardContent,
  CardMedia,
  Button,
  Typography,
} from "@material-ui/core";
import VisibilityIcon from "@material-ui/icons/Visibility";
import moment from "moment";


import useStyles from "./styles";

export default function Post({ post, getModal, setCurrentId }) {
  const classes = useStyles();

  const { title, author, createdAt, message, tags, selectedFile } =
    post;

  return (
    <Card className={classes.card}>
      <CardMedia className={classes.media} image={selectedFile} title={title} />
      <div className={classes.overlay}>
        <Typography variant="h6">{author}</Typography>
        <Typography variant="body2">{moment(createdAt).fromNow()}</Typography>
      </div>
      <div className={classes.overlay3}>
        <Button style={{ color: "white" }} size="small" onClick={getModal}>
          <VisibilityIcon fontSize="default" />
        </Button>
      </div>
      <div className={classes.details}>
        <Typography
          className={classes.title}
          variant="h4"
          color="text-secondary"
        >
          {title}
        </Typography>
        <Typography variant="body2" color="text-secondary">
          {tags.map((tag) => `#${tag} `)}
        </Typography>
      </div>

      <CardContent>
        <Typography className={classes.message} variant="h6" gutterBottom>
          {message}
        </Typography>
      </CardContent>
    </Card>
  );
}
