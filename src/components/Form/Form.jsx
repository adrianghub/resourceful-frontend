import React, { useState, useEffect } from 'react'
import { TextField, Button, Typography, Paper } from '@material-ui/core'; 
import FileBase from 'react-file-base64';
import { useDispatch } from 'react-redux';
import { useSelector } from "react-redux";

import useStyles from './styles';
import { createPost, updatePost } from '../../actions/posts';

export default function Form({ currentId, setCurrentId }) {
  const [postData, setPostData] = useState({ author: '', title: '', message: '', snippetUrl: '', tags: '', selectedFile: '', isLiked: false });
  const post = useSelector((state) => currentId ? state.posts.find((p) => p._id === currentId) : null);
  const classes = useStyles();
  const dispatch = useDispatch();

  useEffect(() => {
    if(post) setPostData(post);
  }, [post])

  const handleSubmit = (e) => {
    e.preventDefault();

    if (currentId) {
      dispatch(updatePost(currentId, postData));
    } else {
      dispatch(createPost(postData));
    }

    clear();
  }

  const clear = () => {
    setCurrentId(null);
    setPostData({ author: '', title: '', message: '', snippetUrl: '', tags: '', selectedFile: '', isLiked: false });
  }

  return (
    <Paper className={classes.paper}>
      <form autoComplete="off" noValidate className={`${classes.root} ${classes.form}`} onSubmit={handleSubmit}>
        <Typography variant="h6">{currentId ? 'Update' : 'Create'} a snippet</Typography>
        <TextField name="author" variant="outlined" label="Author" fullWidth value={postData.author} onChange={(e) => setPostData({  ...postData, author: e.target.value })} />
        <TextField name="title" variant="outlined" label="Title" fullWidth value={postData.title} onChange={(e) => setPostData({  ...postData, title: e.target.value })} />
        <TextField name="message" variant="outlined" label="Message" fullWidth value={postData.message} onChange={(e) => setPostData({  ...postData, message: e.target.value })} />
        <TextField name="url" variant="outlined" label="SnippetUrl" fullWidth value={postData.snippetUrl} onChange={(e) => setPostData({  ...postData, snippetUrl: e.target.value })} />
        <TextField name="tags" variant="outlined" label="Tags" fullWidth value={postData.tags} onChange={(e) => setPostData({  ...postData, tags: e.target.value.split(',') })} />
        <div className={classes.fileInput}>
          <FileBase 
            type="file"
            multiple={false}
            onDone={({ base64 }) => setPostData({ ...postData, selectedFile: base64 })}
          />
        </div>
        <div style={{display: 'flex', justifyContent: 'space-between', alignItems: 'center'}}>
          <Button className={classes.button} variant="outlined" color="primary" size="large" type="submit" fullWidth>Submit</Button>
          <Button className={classes.button} variant="outlined" color="secondary" size="large" onClick={clear} fullWidth>Clear</Button>
        </div>
      </form>
    </Paper>
  )
}
