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
          <section className="section">
            <h1 className="title has-text-centered">{recipe.info.name}</h1>
            <Image/>
          </section>
          <section className="section">
            <IngredientsList components={recipe.info.recipe_components}/>
          </section>
        </div>
      </div>
      <div className="column is-three-quarters-tablet is-full-mobile">
      <div>
        <section className="section">
          <RecipeDetails details={recipe.info.details}/>
        </section>
      </div>
      <div className="card">
        <section className="section">
          <RecipeMethod steps={recipe.info.steps}/>
        </section>
      </div>
      </div>
    </div>
  )
}

export default Recipe;


