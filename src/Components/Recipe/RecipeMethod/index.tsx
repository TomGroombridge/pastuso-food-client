import * as React from 'react';

const RecipeMethod = (props: any) => {
  const { steps } = props;
  return(
    <div className="card recipe-card">
      <section className="section">
        <div className="content is-medium">
          <h3>Method</h3>
          <ol type="1">
            {steps.map((step: any, index: any) =>
              <li key={index}>{step.step_directions}</li>
            )}
          </ol>
        </div>
      </section>
    </div>
  )
}

export default RecipeMethod;