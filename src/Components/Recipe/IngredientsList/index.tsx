import * as React from 'react';

const IngredientsList = (props: any) => {
  return(
    <aside className="menu">
      {props.components.map((c: any, index: any) =>
      <React.Fragment key={index}>
        <p className="menu-label">
          For the {c.name}
        </p>
        {c.ingredients.map((i: any, subindex: any) =>
          <ul className="menu-list" key={subindex}>
            <li><a>{i.name}</a></li>
          </ul>
        )}
      </React.Fragment >
      )}
    </aside>
  )
}

export default IngredientsList;