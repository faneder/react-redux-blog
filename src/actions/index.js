import axios from 'axios';
import { withRouter } from 'react-router-dom';

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
  FETCH_SIGNUP_REQUEST,
  FETCH_SIGNUP_SUCCESS,
  FETCH_SIGNUP_FAILURE,
  UNAUTH,
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

export const fetchUsers = () => {
  const request = axios.get('http://jsonplaceholder.typicode.com/users');

  return {
    type: FETCH_USERS,
    payload: request
  }
}

export const signIn = (email, password, history) => (dispatch) => {
  axios.post(`${ROOT_AUTH_URL}/auth/local`, { email, password})
    .then(res => {
      dispatch({ type: FETCH_AUTH_SUCCESS });

      localStorage.setItem('token', res.data.token);
      history.push('/');
    })
    .catch(error => {
      if (error.response) {
        dispatch(resError(FETCH_AUTH_FAILURE, error.response.data.message));
        dispatch({ type: SHOW_ALERT })
        setTimeout(() => {
          dispatch({ type: HIDE_ALERT })
        }, 5000)
      }
    });
}

export const resError = (type, error) => {
  return {
    type: type,
    payload: error
  };
}

export const signOut = () => {

  localStorage.removeItem('token');

  return { type: UNAUTH };
}

export const signUp = ({name, email, password}, history) => {
  return dispatch => {
    dispatch({ type: FETCH_SIGNUP_REQUEST });

    axios.post(`${ROOT_AUTH_URL}/api/users`, {name, email, password})
      .then(response => {
        dispatch({ type: FETCH_SIGNUP_SUCCESS });
        localStorage.setItem('token', response.data.token);

        history.push('/');
      })
      .catch(error => {
        if (error.response) {
          dispatch(resError(FETCH_SIGNUP_FAILURE, error.response.data.message));
          dispatch({ type: SHOW_ALERT })
          setTimeout(() => {
            dispatch({ type: HIDE_ALERT })
          }, 5000)
        }
      });
  }
}
