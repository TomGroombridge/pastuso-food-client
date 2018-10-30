import * as React from 'react';
import RecipeTile from '../../Components/RecipeTile';
// we should have a json file to show all the recipes we have here.

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