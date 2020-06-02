import { Action } from 'redux';
import { LOADING } from './actionTypes';

export interface ILoadingAction extends Action {
  payload: {
    value: boolean;
  }
}

export const loading = (value: ILoadingAction) => ({
  type: LOADING,
  payload: { value },
});