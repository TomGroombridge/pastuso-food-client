import { put, takeLatest } from 'redux-saga/effects';
import { LOADING } from '../Loader/actionTypes';
import { FETCH_RECIPE, FETCH_RECIPE_SUCCESS } from './actionTypes';

import * as recipeJson from "../../Data/recipe.json";

export function* fetchRecipeSaga(){
  try {
    yield put({ type: LOADING, payload: true });
    yield put({ type: FETCH_RECIPE_SUCCESS, payload: recipeJson })
  } catch {
    yield put({ type: LOADING, payload: false });
  }
}

export function* RecipeStepsListeners() {
  yield takeLatest(FETCH_RECIPE, fetchRecipeSaga);
}