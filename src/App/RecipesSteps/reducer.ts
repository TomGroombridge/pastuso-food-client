import { FETCH_RECIPE_SUCCESS } from './actionTypes';

export interface IRecipeSteps {
  recipe: any;
}

const initialState: IRecipeSteps = {
  recipe: {},
};

function recipeSteps(state = initialState, action: any) {
  switch (action.type) {
    case FETCH_RECIPE_SUCCESS: {
      return {
        ...state,
        recipe: action.payload,
      };
    }
    default:
      return state;
  }
}

export default recipeSteps;