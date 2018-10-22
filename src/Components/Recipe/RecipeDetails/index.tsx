import * as React from 'react';

const RecipeDetails = () => {
  return(
    <nav className="level">
      <div className="level-item has-text-centered">
        <div>
          <p className="heading">SERVES</p>
          <p className="title">8</p>
        </div>
      </div>
      <div className="level-item has-text-centered">
        <div>
          <p className="heading">PREP TIME</p>
          <p className="title">1H</p>
        </div>
      </div>
      <div className="level-item has-text-centered">
        <div>
          <p className="heading">COOK TIME</p>
          <p className="title">3H, 10M</p>
        </div>
      </div>
      <div className="level-item has-text-centered">
        <div>
          <p className="heading">DIFFICULTY LEVEL</p>
          <p className="title">EASY</p>
        </div>
      </div>
    </nav>
  )
}

export default RecipeDetails;