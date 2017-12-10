import {
  CHANGE_AUTH,
  FETCH_AUTH_SUCCESS,
  FETCH_AUTH_FAILURE,
  HIDE_ERROR_ALERT
} from '../actions/types';

export default (state = {}, action) => {
	switch (action.type) {
		case CHANGE_AUTH:
			return action.payload;
		case FETCH_AUTH_FAILURE:
			return { ...state, error: action.payload };
		case FETCH_AUTH_SUCCESS:
      		return { ...state, error: '', authenticated: true };
	}
	return state;
}
