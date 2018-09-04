import { combineReducers } from 'redux';
import { routerReducer } from 'react-router-redux';
import organizations from './organizations';
import members from './members';
import user from './user';

const AppReducer = combineReducers({
  router: routerReducer,
  organizations,
  members,
  user
});

export default AppReducer;