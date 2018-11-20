import { put, takeLatest } from 'redux-saga/effects';
import { LOADING } from '../Loader/actionTypes';

import {
  FETCH_RECIPE
} from './actionTypes';

export function* fetchRecipeSaga(){
  try {
    yield put({ type: LOADING, payload: true });
  } catch {
    yield put({ type: LOADING, payload: false });
  }
}

export function* RecipeStepsListeners() {
  yield takeLatest(FETCH_RECIPE, fetchRecipeSaga);
}