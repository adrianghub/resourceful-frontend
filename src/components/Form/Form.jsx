import React, { useState } from 'react'
import { TextField, Button, Typography, Paper } from '@material-ui/core'; 
import FileBase from 'react-file-base64';
import { useDispatch } from 'react-redux';

import useStyles from './styles';
import { createPost } from '../../actions/posts';

export default function Form() {
  const [postData, setPostData] = useState({ author: '', title: '', message: '', snippetUrl: '', tags: '', selectedFile: '' });
  const classes = useStyles();
  const dispatch = useDispatch();

  const handleSubmit = (e) => {
    e.preventDefault();

    dispatch(createPost(postData));
  }

  const clear = () => {
    // clear logic
  }

  return (
    <Paper className={classes.paper}>
      <form autoComplete="off" noValidate className={`${classes.root} ${classes.form}`} onSubmit={handleSubmit}>
        <Typography varient="h6">Creating snippet</Typography>
        <TextField name="author" varient="outlined" label="Author" fullWidth value={postData.author} onChange={(e) => setPostData({  ...postData, author: e.target.value })} />
        <TextField name="title" varient="outlined" label="Title" fullWidth value={postData.title} onChange={(e) => setPostData({  ...postData, title: e.target.value })} />
        <TextField name="message" varient="outlined" label="Message" fullWidth value={postData.message} onChange={(e) => setPostData({  ...postData, message: e.target.value })} />
        <TextField name="url" varient="outlined" label="SnippetUrl" fullWidth value={postData.snippetUrl} onChange={(e) => setPostData({  ...postData, snippetUrl: e.target.value })} />
        <TextField name="tags" varient="outlined" label="Tags" fullWidth value={postData.tags} onChange={(e) => setPostData({  ...postData, tags: e.target.value.split(' ') })} />
        <div className={classes.fileInput}>
          <FileBase 
            type="file"
            multiple={false}
            onDone={({ base64 }) => setPostData({ ...postData, selectedFile: base64 })}
          />
        </div>
        <div style={{display: 'flex', justifyContent: 'space-between', alignItems: 'center'}}>
          <Button className={classes.button} varient="contained" color="primary" size="large" type="submit" fullWidth>Submit</Button>
          <Button className={classes.button} varient="contained" color="secondary" size="large" onClick={clear} fullWidth>Clear</Button>
        </div>
      </form>
    </Paper>
  )
}
