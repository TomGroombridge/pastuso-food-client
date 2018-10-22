import * as React from 'react';
import RecipeTile from '../../Components/RecipeTile';

const Recipes = (props: any) => {  
  return(
    <section className="section">    
      <div className="tile is-ancestor">
        <div className="tile is-vertical is-12 ">
          <div className="tile">
            <RecipeTile history={props.history}/>
            <RecipeTile history={props.history}/>
            <RecipeTile history={props.history}/>
            <RecipeTile history={props.history}/>            
          </div>
        </div>
      </div>        
    </section>
  )
}

export default Recipes;