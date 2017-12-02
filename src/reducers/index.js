import { combineReducers } from 'redux';
import { reducer as formReducer } from 'redux-form';
import reducersPosts from './reducersPosts';
import reducersAuth from './reducersAuth';

const rootReducer = combineReducers({
  posts: reducersPosts,
  auth: reducersAuth,
  form: formReducer
});

export default rootReducer;
