import axios from 'axios';

import {
  CHANGE_AUTH,
  FETCH_POSTS,
  FETCH_POST,
  CREATE_POST,
  DELETE_POST
} from './types';

const ROOT_URL = 'http://reduxblog.herokuapp.com/api';
const API_KEY = '?key=test';

export const fetchPosts = () => {
  const request = axios.get(`${ROOT_URL}/posts${API_KEY}`);

  return {
    type: FETCH_POSTS,
    payload: request
  };
}

export const createPost = (values, callback) => {
  const request = axios
    .post(`${ROOT_URL}/posts${API_KEY}`, values)
    .then(() => callback());

  return {
    type: FETCH_POSTS,
    payload: request
  };
}

export const fetchPost = (id) => {
  const request = axios.get(`${ROOT_URL}/posts/${id}${API_KEY}`);

  return {
    type: FETCH_POST,
    payload: request
  };
}

export const deletePost = (id, callback) => {
  const request = axios
    .delete(`${ROOT_URL}/posts/${id}${API_KEY}`)
    .then(() => callback());

  return {
    type: FETCH_POST,
    payload: request
  };
}

export const authenticate = (isLoggedIn) => {
  console.log(`isLoggedIn: ${isLoggedIn}`);
  return {
    type: CHANGE_AUTH,
    payload: isLoggedIn
  }
}