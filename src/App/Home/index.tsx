import * as React from 'react'
import Auth from '../Auth/auth';

const Home = () => {

  const openLogin = () => {
    const auth = new Auth();
    auth.login();    
  }  

  return(
    <>
      <h1>This is the home page!</h1>
      <button onClick={() => openLogin()}>Login</button>
    </>
  )
}

export default Home;