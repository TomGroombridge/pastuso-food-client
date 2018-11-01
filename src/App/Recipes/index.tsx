import * as React from 'react';
import RecipeTile from '../../Components/RecipeTile';
import SideNav from '../../Components/SideNav';
// we should have a json file to show all the recipes we have here.

const Recipes = (props: any) => {
  return(
    <section className="section">
      <div className="columns">
        <div className="column is-2 is-hidden-mobile">
          <SideNav />
        </div>
        <div className="column is-10">
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
        </div>
      </div>
    </section>
  )
}

export default Recipes;