import axios from 'axios';

// local host - dev
const url = 'http://localhost:5000/posts'; 
// prod
// const url = 'https://snippet-hint-backend.herokuapp.com/posts';

export const fetchPosts = () => axios.get(url);
export const createPost = (newPost) => axios.post(url, newPost);
export const updatePost = (id, postData) => axios.patch(`${url}/${id}`, postData);
export const deletePost = (id) => axios.delete(`${url}/${id}`);
export const bookmarkPost = (id) => axios.patch(`${url}/${id}/bookmark`);