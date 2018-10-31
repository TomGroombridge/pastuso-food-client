import * as React from 'react';

const RecipeDetails = (props: any) => {
  const { details } = props;
  return(
    <section className="section recipe-details is-hidden-mobile">
      <nav className="level">
        <div className="level-item has-text-centered">
          <div>
            <p className="heading" style={{color: '#FFF'}}>SERVES</p>
            <p className="title" style={{color: '#FFF'}}>{details.serves}</p>
          </div>
        </div>
        <div className="level-item has-text-centered">
          <div>
            <p className="heading" style={{color: '#FFF'}}>PREP TIME</p>
            <p className="title" style={{color: '#FFF'}}>{details.prep_time}</p>
          </div>
        </div>
        <div className="level-item has-text-centered">
          <div>
            <p className="heading" style={{color: '#FFF'}}>COOK TIME</p>
            <p className="title" style={{color: '#FFF'}}>{details.cook_time}</p>
          </div>
        </div>
        <div className="level-item has-text-centered">
          <div>
            <p className="heading" style={{color: '#FFF'}}>DIFFICULTY LEVEL</p>
            <p className="title" style={{color: '#FFF'}}>{details.difficulty}</p>
          </div>
        </div>
      </nav>
    </section>
  )
}

export default RecipeDetails;