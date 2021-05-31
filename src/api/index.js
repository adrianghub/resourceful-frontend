import axios from 'axios';

// local host - dev
const API = axios.create({ baseURL: 'http://localhost:5000' });

// prod
// const API = axios.create({ baseURL: 'https://snippet-hint-backend.herokuapp.com' });

export const fetchPosts = () => API.get('/posts');
export const createPost = (newPost) => API.post('/posts', newPost);
export const updatePost = (id, updatedPost) => API.patch(`/posts/${id}`, updatedPost);
export const deletePost = (id) => API.delete(`/posts/${id}`);
export const bookmarkPost = (id) => API.patch(`/posts/${id}/bookmark`);

export const signIn = (formData) => API.post('/users/signin', formData);
export const signUp = (formData) => API.post('/users/signup', formData);