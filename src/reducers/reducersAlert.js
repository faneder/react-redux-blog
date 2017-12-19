import {
	SHOW_ALERT,
  	HIDE_ALERT
} from '../actions/types';

export default (state = false, action) => {
	switch (action.type) {
		case SHOW_ALERT:
			return { ...state, display: true }
		case HIDE_ALERT:
			return { ...state, display: false }
	}
	return state;
}
