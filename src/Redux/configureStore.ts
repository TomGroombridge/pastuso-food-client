import {
  routerMiddleware as createRouterMiddleware,
} from 'react-router-redux';
import {
  applyMiddleware,
  compose,
  createStore,
} from 'redux';
import createSagaMiddleware from 'redux-saga';
import history from './generateHistory';
import { default as rootReducer } from './rootReducer';
import rootSaga from './rootSaga';

const configureStore = (initialState?: any) => {
  // const preloadedState = (window as any).__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ &&
  //   (window as any).__REDUX_DEVTOOLS_EXTENSION_COMPOSE__();
  const composeEnhancers = (window as any).__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
  const routerMiddleware = createRouterMiddleware(history);
  const sagaMiddleware = createSagaMiddleware();
  const store = createStore(
    rootReducer,
    composeEnhancers(
      applyMiddleware(sagaMiddleware, routerMiddleware),
    )
  );
  // Always run the sagaMiddleware after the store is created.
  sagaMiddleware.run(rootSaga);
  return store;
};

export default configureStore;