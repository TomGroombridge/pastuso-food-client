import * as React from 'react'

const NavBar = (props: any) => {
  const { isAuthenticated } = props.auth;

  const openLogin = () => {
    props.auth.login();
  }

  const logout = () => {
    props.auth.logout();
  }

  const redirectTo = (destination: string) => {
    props.history.push(destination);
  }

  return (
    <nav className="navbar" role="navigation" aria-label="main navigation">
      <div className="navbar-brand">
        <a className="navbar-item" href="/" style={{color: '#FFF'}}>
          <img src="https://bulma.io/images/bulma-logo.png" width="112" height="28"/>
        </a>

        <a role="button" className="navbar-burger burger" aria-label="menu" aria-expanded="false" data-target="navbarBasicExample" style={{color: '#FFF'}}>
          <span aria-hidden="true"/>
          <span aria-hidden="true"/>
          <span aria-hidden="true"/>
        </a>
      </div>

      <div id="navbarBasicExample" className="navbar-menu">
        <div className="navbar-start">
          <a className="navbar-item" onClick={() => redirectTo('/')} style={{color: '#FFF'}}>
            Home
          </a>

          <a className="navbar-item" onClick={() => redirectTo('/recipes')} style={{color: '#FFF'}}>
            Recipes
          </a>

          <div className="navbar-item has-dropdown is-hoverable">
            <a className="navbar-link" style={{color: '#FFF'}}>
              More
            </a>

            <div className="navbar-dropdown">
              <a className="navbar-item">
                About
              </a>
              <a className="navbar-item">
                Jobs
              </a>
              <a className="navbar-item">
                Contact
              </a>
              <hr className="navbar-divider"/>
              <a className="navbar-item">
                Report an issue
              </a>
            </div>
          </div>
        </div>

        <div className="navbar-end">
          <div className="navbar-item">
              {
                isAuthenticated() && (
                  <div className="buttons">
                    <a className="button is-primary" onClick={() => logout()}>
                      <strong>Log out</strong>
                    </a>
                  </div>
                )
              }
              {
                !isAuthenticated() && (
                  <div className="buttons">
                    <a className="button is-primary" onClick={() => openLogin()}>
                      <strong>Log in</strong>
                    </a>
                  </div>
                )
              }
          </div>
        </div>
      </div>
    </nav>
  )
}

export default NavBar;