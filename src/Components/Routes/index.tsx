import * as React from 'react'
import { BrowserRouter, Route, Switch } from 'react-router-dom'
import Home from '../../App/Home'

const Routes = () => {
  return(
    <BrowserRouter>
      <Switch>
        <Route path="/" exact={true} component={Home} />        
      </Switch>
    </BrowserRouter>
  )
}

export default Routes