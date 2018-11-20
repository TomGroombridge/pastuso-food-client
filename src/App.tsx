import * as React from 'react';
import { Provider } from 'react-redux';
import { ConnectedRouter } from 'react-router-redux';
import Routes from './Components/Routes';
import configureStore from './Redux/configureStore';
import history from './Redux/generateHistory';

const store = configureStore();

class App extends React.Component {

  render() {
    return (
      <Provider store={store}>
        <ConnectedRouter history={history}>
          <Routes />
        </ConnectedRouter>
      </Provider>
    );
  }
}

export default App;