import { combineReducers } from 'redux';
import { reducer as formReducer } from 'redux-form';
import reducersPosts from './reducersPosts';

const rootReducer = combineReducers({
  posts: reducersPosts,
  form: formReducer
});

export default rootReducer;
