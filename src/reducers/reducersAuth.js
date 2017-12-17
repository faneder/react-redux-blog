import {
  UNAUTH,
  FETCH_AUTH_SUCCESS,
  FETCH_AUTH_FAILURE,
  FETCH_SIGNUP_REQUEST,
  FETCH_SIGNUP_SUCCESS,
  FETCH_SIGNUP_FAILURE
} from '../actions/types';

export default (state = {}, action) => {
	switch (action.type) {
		case FETCH_AUTH_SUCCESS:
      		return { ...state, error: '', authenticated: true };
		case FETCH_AUTH_FAILURE:
			return { ...state, error: action.payload };
		case FETCH_SIGNUP_REQUEST:
      		return { ...state, isFetching: true };
		case FETCH_SIGNUP_SUCCESS:
      		return { ...state, error: '', authenticated: true };
		case FETCH_SIGNUP_FAILURE:
			return { ...state, error: action.payload };
	    case UNAUTH:
     		return { ...state, authenticated: false };
	}
	return state;
}
