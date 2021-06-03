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

export default function Post({ post, getModal }) {
  const classes = useStyles();

  const { title, author, createdAt, message, tags, selectedFile } = post;

  return (
    <Card className={classes.card}>
      <CardMedia className={classes.media} image={selectedFile} title={title} />
      <div className={classes.overlay}>
        <Typography variant="h6">{author}</Typography>
        <Typography variant="body2">{moment(createdAt).fromNow()}</Typography>
      </div>
      <div className={classes.overlay2}>
        <Button style={{ color: "white" }} size="small" onClick={getModal}>
          <VisibilityIcon fontSize="default" />
        </Button>
      </div>
      <div className={classes.details}>
        <Typography className={classes.tags} variant="subtitle2" color="textSecondary">
          {tags.map((tag) => `#${tag} `)}
        </Typography>
      </div>

      <Typography className={classes.title} variant="h4">
        {title}
      </Typography>

      <CardContent>
        <Typography variant="body2" color="textSecondary">
          {message}
        </Typography>
      </CardContent>
    </Card>
  );
}
