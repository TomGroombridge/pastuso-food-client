import * as React from 'react'
import { Route, Router } from 'react-router-dom'
import Auth from '../../App/Auth/auth';
import Home from '../../App/Home'
import history from '../../history';
import Callback from '../Callback';

const auth = new Auth();

const handleAuthentication = (nextState: any) => {
  if (/access_token|id_token|error/.test(nextState.location.hash)) {
    auth.handleAuthentication();
  }
}

const Routes = () => {
  return(
    <Router history={history}>
      <div>
        <Route path="/" exact={true} render={(props) => <Home auth={auth} {...props} />} />        
        <Route path="/callback" render={(props) => {
          handleAuthentication(props);
          return <Callback/> 
        }}/>
      </div>
    </Router>
  )
}

export default Routes