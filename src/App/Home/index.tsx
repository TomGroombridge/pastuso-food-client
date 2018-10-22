import * as React from 'react'
import Recipe from '../../Components/Recipe';

const Home = () => {    
  return(
    <>      
      <section className="section is-paddingless">        
        <div className="columns">
          <div className="column is-1 is-hidden-mobile"/>
          <div className="column is-10 is-full-mobile">
            <Recipe />
          </div>
          <div className="column is-1 is-hidden-mobile"/>
        </div>        
      </section>
    </>
  )
}

export default Home;