import * as React from 'react';

const RecipeDetails = (props: any) => {
  const { details } = props;
  return(
    <nav className="level">
      <div className="level-item has-text-centered">
        <div>
          <p className="heading">SERVES</p>
          <p className="title">{details.serves}</p>
        </div>
      </div>
      <div className="level-item has-text-centered">
        <div>
          <p className="heading">PREP TIME</p>
          <p className="title">{details.prep_time}</p>
        </div>
      </div>
      <div className="level-item has-text-centered">
        <div>
          <p className="heading">COOK TIME</p>
          <p className="title">{details.cook_time}</p>
        </div>
      </div>
      <div className="level-item has-text-centered">
        <div>
          <p className="heading">DIFFICULTY LEVEL</p>
          <p className="title">{details.difficulty}</p>
        </div>
      </div>
    </nav>
  )
}

export default RecipeDetails;