import * as React from 'react';
// import '../../Styles/debug.css';
import Image from './Image';
import IngredientsList from './IngredientsList';
import RecipeDetails from './RecipeDetails';
import RecipeMethod from './RecipeMethod';

const Recipe = (props: any) => {
  const { recipe } = props;
  return(
    <div className="columns">
      <div className="column is-one-quarter-tablet is-full-mobile">
        <div>
          <Image/>
          <section className="section">
            <IngredientsList components={recipe.info.recipe_components}/>
          </section>
        </div>
      </div>
      <div className="column is-three-quarters-tablet is-full-mobile">
      <div>
        <RecipeDetails details={recipe.info.details}/>
      </div>
      <RecipeMethod steps={recipe.info.steps}/>
      </div>
    </div>
  )
}

export default Recipe;


