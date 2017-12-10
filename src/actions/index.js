import axios from 'axios';
import { browserHistory } from 'react-router';

import config from '../config/config';
import {
  CHANGE_AUTH,
  FETCH_POSTS,
  FETCH_POST,
  CREATE_POST,
  DELETE_POST,
  FETCH_USERS,
  FETCH_AUTH_SUCCESS,
  FETCH_AUTH_FAILURE,
  SHOW_ALERT,
  HIDE_ALERT
} from './types';

const ROOT_BLOG_URL = config.blog.url;
const BLOG_API_KEY = config.blog.api_key;
const ROOT_AUTH_URL = config.auth.url;

export const fetchPosts = () => {
  const request = axios.get(`${ROOT_BLOG_URL}/posts${BLOG_API_KEY}`);

  return {
    type: FETCH_POSTS,
    payload: request
  };
}

export const createPost = (values, callback) => {
  const request = axios
    .post(`${ROOT_BLOG_URL}/posts${BLOG_API_KEY}`, values)
    .then(() => callback());

  return {
    type: FETCH_POSTS,
    payload: request
  };
}

export const fetchPost = (id) => {
  const request = axios.get(`${ROOT_BLOG_URL}/posts/${id}${BLOG_API_KEY}`);

  return {
    type: FETCH_POST,
    payload: request
  };
}

export const deletePost = (id, callback) => {
  const request = axios
    .delete(`${ROOT_BLOG_URL}/posts/${id}${BLOG_API_KEY}`)
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

export const fetchUsers = () => {
  const request = axios.get('http://jsonplaceholder.typicode.com/users');

  return {
    type: FETCH_USERS,
    payload: request
  }
}

export const signIn = (email, password) => (dispatch) => {
  axios.post(`${ROOT_AUTH_URL}/auth/local`, { email, password })
    .then(res => {
      console.log(`res: ${res}`)
      dispatch({ type: FETCH_AUTH_SUCCESS });

      localStorage.setItem('token', res.data.token);
      browserHistory.push('/feature');
    })
    .catch((err) => {
      console.log(`err: ${err}`)

      dispatch(resError(FETCH_AUTH_FAILURE, 'Bad Login Info'));
      dispatch({ type: SHOW_ALERT })
      setTimeout(() => {
        dispatch({ type: HIDE_ALERT })
      }, 5000)
    });
}

export const resError = (type, error) => {
  return {
    type: type,
    payload: error
  };
}

//register http://localhost:9000/api/users
