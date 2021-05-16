import React from 'react'
import { Card, CardActions, CardContent, CardMedia, Button, Typography } from '@material-ui/core'
import ThumbUpAltIcon from '@material-ui/icons/ThumbUpAlt';
import DeleteIcon from '@material-ui/icons/Delete';
import VisibilityIcon from '@material-ui/icons/Visibility';
import MoreHorizIcon from '@material-ui/icons/MoreHoriz';
import moment from 'moment';

import { useDispatch } from 'react-redux';

import useStyles from './styles';
import { deletePost } from '../../../actions/posts';

export default function Post({ post, getModal, setCurrentId }) {
  const dispatch = useDispatch()
  const classes = useStyles();


  const { title, author, createdAt, message, tags, likeCount, selectedFile  } = post;

  return ( 
      <Card className={classes.card}>
        <CardMedia className={classes.media} image={selectedFile} title={title} />
        <div className={classes.overlay}>
          <Typography variant="h6">{author}</Typography>
          <Typography variant="body2">{moment(createdAt).fromNow()}</Typography>
        </div>
        <div className={classes.overlay2}>
          <Button style={{ color: 'white' }} size="small" onClick={getModal}>
            <VisibilityIcon fontSize="default" />
          </Button>
        </div>
        <div className={classes.overlay3}>
          <Button style={{ color: 'white' }} size="small" onClick={() => setCurrentId(post._id)}>
            <MoreHorizIcon fontSize="default" />
          </Button>
        </div>
        <div className={classes.details}>
          <Typography className={classes.title}  variant="h4" color="text-secondary">{title}</Typography>
          <Typography variant="body2" color="text-secondary">{tags.map((tag) => `#${tag} `)}</Typography>
        </div>

        <CardContent>
          <Typography className={classes.message} variant="h6" gutterBottom>{message}</Typography>
        </CardContent>
        <CardActions className={classes.cardActions}>
          <Button size="small" color="primary" onClick={() => {}}>
            <ThumbUpAltIcon fontSize="small" />
            Like {likeCount}
          </Button>
          <Button size="small" color="primary" onClick={() => dispatch(deletePost(post._id))}>
            <DeleteIcon fontSize="small" />
            Delete
          </Button>
        </CardActions>
      </Card>
  )
}
