import * as React from 'react';
import RecipeTile from '../../Components/RecipeTile';
// we should have a json file to show all the recipes we have here.

const Recipes = (props: any) => {
  return(
    <section className="section">
      <div className="columns is-multiline is-tablet">
        <RecipeTile history={props.history}/>
        <RecipeTile history={props.history}/>
        <RecipeTile history={props.history}/>
        <RecipeTile history={props.history}/>
        <RecipeTile history={props.history}/>
        <RecipeTile history={props.history}/>
        <RecipeTile history={props.history}/>
        <RecipeTile history={props.history}/>
        <RecipeTile history={props.history}/>
        <RecipeTile history={props.history}/>
        <RecipeTile history={props.history}/>
      </div>
    </section>
  )
}

export default Recipes;