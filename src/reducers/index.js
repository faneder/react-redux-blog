import { combineReducers } from 'redux';
import { reducer as reducersForm } from 'redux-form';
import reducersPosts from './reducersPosts';
import reducersAuth from './reducersAuth';
import reducersUsers from './reducersUsers';
import reducersAlert from './reducersAlert';

const rootReducer = combineReducers({
  users: reducersUsers,
  posts: reducersPosts,
  auth: reducersAuth,
  form: reducersForm,
  alert: reducersAlert
});

export default rootReducer;
