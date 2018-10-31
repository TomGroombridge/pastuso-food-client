import * as React from 'react';
import Picture from '../../Styles/FoodPicture.jpg'

const Recipe = (props: any) => {
  return(
    <div className="tile is-ancestor">
      <div className="tile is-3 is-vertical is-parent">
        <div className="tile is-child box">
          <div style={{marginTop: '100px'}}>
            <div className="has-text-centered">
              <h2 className="title is-2" style={{marginBottom: '50px'}}>Chicken Salad</h2>
              <div style={{marginTop: '20px'}}>
                <p className="heading">SERVES</p>
                <p className="title">{props.recipe.info.details.serves}</p>
              </div>
              <div style={{marginTop: '20px'}}>
                <p className="heading">COOK TIME</p>
                <p className="title">{props.recipe.info.details.cook_time}</p>
              </div>
              <div style={{marginTop: '20px'}}>
                <p className="heading">PREP TIME</p>
                <p className="title">{props.recipe.info.details.prep_time}</p>
              </div>
              <div style={{marginTop: '20px'}}>
                <p className="heading">DIFFICULTY</p>
                <p className="title">{props.recipe.info.details.difficulty}</p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="tile is-parent">
        <div className="tile">
        <figure className="image">
          <img src={Picture}/>
        </figure>
        </div>
      </div>
    </div>
  )
}

export default Recipe