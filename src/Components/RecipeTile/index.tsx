import * as React from 'react';

const RecipeTile = ({history}: any) => {
  return(    
    <div className="tile is-parent is-vertical" onClick={() => history.push('/recipes/1')}>
      <article className="tile is-child notification is-primary">
        <p className="title">Vertical...</p>
        <p className="subtitle">Top tile</p>
      </article>              
    </div>
  )
}

export default RecipeTile