import * as React from 'react';

const RecipeMobileDetails = (props: any) => {
  const { details } = props;
  return(
    <section className="section recipe-details is-hidden-tablet" style={{padding: '1em'}}>
      <nav className="level is-mobile">
        <div className="level-item has-text-centered">
          <div>
            <p className="heading" style={{color: '#FFF'}}>SERVES</p>
            <p className="title" style={{color: '#FFF'}}>{details.serves}</p>
          </div>
        </div>
        <div className="level-item has-text-centered">
          <div>
            <p className="heading" style={{color: '#FFF'}}>COOK TIME</p>
            <p className="title" style={{color: '#FFF'}}>{details.cook_time}</p>
          </div>
        </div>
      </nav>
    </section>
  )
}

export default RecipeMobileDetails