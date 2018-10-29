import * as React from 'react'
import Recipe from '../../Components/Recipe'

class RecipePage extends React.Component<{}, {}> {

  state = {
    recipe: null
  }

  componentDidMount(){
    const jsonResponse = require('../../Data/recipe.json');
    this.setState({recipe: jsonResponse})
  }

  render(){
    return(
      <>
        <section className="section is-paddingless">
          <div className="columns">
            <div className="column is-1 is-hidden-mobile"/>
            <div className="column is-10 is-full-mobile">
              { this.state.recipe && <Recipe recipe={this.state.recipe}/>}
            </div>
            <div className="column is-1 is-hidden-mobile"/>
          </div>
        </section>
      </>
    )
  }
}

export default RecipePage;