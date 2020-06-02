import {
  FETCH_RECIPE
} from './actionTypes';

export const fetchRecipe: any = (recipeId: any) => ({
  type: FETCH_RECIPE,
  payload: recipeId,
});
