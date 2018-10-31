import * as React from 'react';
import Photo from '../../Styles/FoodPicture.jpg' ;

const RecipeTile = ({history}: any) => {
  return(
    <div className="column is-3">
      <div className="card" style={{cursor: 'pointer'}} onClick={() => history.push('recipes/1')}>
        <div className="card-image">
          <figure className="image is-4by3">
            <img src={Photo} alt="Placeholder image"/>
          </figure>
        </div>
        <div className="card-content">
          <p className="title is-4">Lasagne</p>
          <p className="subtitle is-6">
            <div className="tags">
              <span className="tag">Family Favourite</span>
              <span className="tag">Freezable</span>
            </div>
          </p>
        </div>
      </div>
    </div>
  )
}

export default RecipeTile