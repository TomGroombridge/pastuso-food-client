import * as React from 'react'
import NavBar from '../../Components/NavBar';

const Home = (props: any) => {    
  return(
    <>
      <NavBar auth={props.auth}/>
      <section className="section">
        <h1>This is a recipe</h1>        
      </section>
    </>
  )
}

export default Home;