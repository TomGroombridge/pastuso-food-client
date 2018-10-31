import * as React from 'react'
import { Route, Router } from 'react-router-dom'
import Auth from '../../App/Auth/auth';
import Home from '../../App/Home';
import RecipePage from '../../App/Recipe'
import Recipes from '../../App/Recipes';
import history from '../../history';
import Callback from '../Callback';
import Footer from '../Footer';
import NavBar from '../NavBar';

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
        <NavBar auth={auth} history={history}/>
        <Route path="/" exact={true} render={Home} />
        <Route path="/recipes/:id" exact={true} component={RecipePage}/>
        <Route path="/recipes" exact={true} render={Recipes} history={history}/>
        <Route path="/callback" render={(props: any) => {
          handleAuthentication(props);
          return <Callback/>
        }}/>
        <Footer />
      </div>
    </Router>
  )
}

export default Routes