import * as React from 'react';
// import '../../Styles/debug.css';
import Image from './Image';
import IngredientsList from './IngredientsList';
import RecipeDetails from './RecipeDetails';
import RecipeMethod from './RecipeMethod';

const Recipe = () => {
  return(
    <div className="columns">
      <div className="column is-one-quarter-tablet is-full-mobile">
        <div className="card">
          <section className="section">                        
            <h1 className="title has-text-centered">Lasagne</h1> 
            <Image/>   
          </section>
          <section className="section">       
            <IngredientsList />                        
          </section>
        </div>
      </div>
      <div className="column is-three-quarters-tablet is-full-mobile">
      <div className="card">
        <section className="section">          
          <RecipeDetails /> 
        </section>
      </div>
      <div className="card">
        <section className="section">
          <RecipeMethod />                  
        </section>        
      </div>
      </div>      
    </div>
  )
}

export default Recipe;


