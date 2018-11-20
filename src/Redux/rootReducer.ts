import { routerReducer } from 'react-router-redux';
import { combineReducers } from 'redux';
import loader from '../App/Loader/reducer';

export default combineReducers({
  loader,
  router: routerReducer,
});