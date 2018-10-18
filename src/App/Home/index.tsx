import * as React from 'react'
import NavBar from '../../Components/NavBar';
import Recipe from '../../Components/Recipe';

const Home = (props: any) => {    
  return(
    <>
      <NavBar auth={props.auth}/>
      <section className="section">
        <Recipe />
      </section>
    </>
  )
}

export default Home;