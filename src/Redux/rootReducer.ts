import { routerReducer } from 'react-router-redux';
import { combineReducers } from 'redux';
import loader from '../App/Loader/reducer';
import recipeSteps from '../App/RecipesSteps/reducer';

export default combineReducers({
  loader,
  recipeSteps,
  router: routerReducer,
});