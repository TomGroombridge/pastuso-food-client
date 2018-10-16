import * as React from 'react'

const Home = (props: any) => {  

  const openLogin = () => {    
    props.auth.login();    
  }

  const logout = () => {    
    props.auth.logout();
  }

  const { isAuthenticated } = props.auth;

  return(
    <>
      <h1>This is the home page!</h1>
      { 
        isAuthenticated() && (
          <button onClick={() => logout()}>Log out</button>    
        )
      }
      { 
        !isAuthenticated() && (
          <button onClick={() => openLogin()}>Log in</button>
        )
      }      
    </>
  )
}

export default Home;