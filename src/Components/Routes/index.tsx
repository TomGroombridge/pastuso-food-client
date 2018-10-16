import * as React from 'react'
import { BrowserRouter, Route, Switch } from 'react-router-dom'
import Auth from '../../App/Auth/auth';
import Home from '../../App/Home'

const auth = new Auth();

const Routes = () => {
  return(
    <BrowserRouter>
      <Switch>
        <Route path="/" render={(props) => <Home auth={auth} {...props} />} />        
      </Switch>
    </BrowserRouter>
  )
}

export default Routes