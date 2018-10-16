import * as React from 'react'

const Home = (props: any) => {  

  const openLogin = () => {    
    props.auth.login();    
  }  

  return(
    <>
      <h1>This is the home page!</h1>
      <button onClick={() => openLogin()}>Login</button>
    </>
  )
}

export default Home;