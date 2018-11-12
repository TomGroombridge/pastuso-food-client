import * as React from 'react';

const RecipesSteps = () => {
  return(
    <section className="section">
    <div className="columns">
      <div className="column is-one-fifth has-text-centered">
        <div className="level-item">
          <div>
            <p className="heading">Step</p>
            <p className="title">3/12</p>
          </div>
        </div>
      </div>
      <div className="column is-three-fifths"/>
      <div className="column is-one-fifth has-text-centered">
        <div className="level-item">
          <div>
            <p className="heading">Time</p>
            <p className="title">5 minutes</p>
          </div>
        </div>
        <a className="button is-primary" style={{ margin: '1em'}}>Add more Time</a>
      </div>
    </div>

    <div className="columns" style={{ padding: '3em' }}>
      <div className="column is-one-fifth"/>
      <div className="column is-three-fifths">
        <h1 className="title is-1 has-text-centered">To Make The Filling</h1>
        <h2 className="title is-2 has-text-centered">Finely slice the garlic and ginger. Pick the coriander leaves and set aside, then finely slice the stalks. Heat a splash of groundnut oil in a large frying pan over a medium-high heat, then add the garlic, ginger and coriander stalks. Fry for around 3 minutes, or until golden. Slice the mushrooms, then add to the pan for around 5 minutes, or until lightly golden brown.</h2>
      </div>
      <div className="column is-one-fifth"/>
    </div>



    <div className="columns">
      <div className="column is-one-fifth">
        <div className="content has-text-centered">
          <p className="heading">Step Ingredients</p>
          <ol style={{ listStyle: 'none' , margin: 0 }}>
            <li>Coffee</li>
            <li>Tea</li>
            <li>Milk</li>
          </ol>
        </div>
      </div>
      <div className="column is-three-fifths"/>
      <div className="column is-one-fifth has-text-centered">
          <a className="button is-primary">Skip Step</a>
      </div>
    </div>


    </section>
  )
}

export default RecipesSteps;