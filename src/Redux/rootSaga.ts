import {
  all,
} from 'redux-saga/effects';
import { RecipeStepsListeners } from '../App/RecipesSteps/sagas';

export default function* rootSaga() {
  yield all([
    RecipeStepsListeners(),
  ]);
}