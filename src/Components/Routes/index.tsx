import * as React from 'react'
import { Route, Router } from 'react-router-dom'
import Auth from '../../App/Auth/auth';
import RecipePage from '../../App/Recipe'
import Recipes from '../../App/Recipes';
import RecipesSteps from '../../App/RecipesSteps/container';
import history from '../../Redux/generateHistory';
import Callback from '../Callback';
import Footer from '../Footer';
import NavBar from '../NavBar';

const auth = new Auth();

history.listen((location, action) => {
  window.scrollTo(0, 0);
})


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
        <Route path="/" exact={true} render={Recipes} history={history}/>
        <Route path="/recipes/:id" exact={true} component={RecipePage}/>
        <Route path="/recipes" exact={true} render={Recipes} history={history}/>
        <Route path="/recipes/:id/steps" exact={true} component={RecipesSteps}/>
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