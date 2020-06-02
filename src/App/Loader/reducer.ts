import { LOADING } from './actionTypes';

export interface ILoadingState {
  isLoading: boolean;
}

const initialState: ILoadingState = {
  isLoading: false,
}

export default function(state = initialState, action: any) {
  switch (action.type) {
    case LOADING: {
      return {
        ...state,
        isLoading: action.payload,
      }
    }
    default: {
      return state
    }
  }
}