import { takeLatest } from 'redux-saga/effects';
// put,
import {
  FETCH_RECIPE
} from './actionTypes';

export function fetchRecipeSaga(){
  try {
    console.log('loading the saga!!!');
    // yield put({ type: LOADING, payload: true });
  } catch {
    // yield put({ type: LOADING, payload: false });
  }
}

export function* RecipeStepsListeners() {
  yield takeLatest(FETCH_RECIPE, fetchRecipeSaga);
}