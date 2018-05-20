import { createStore, applyMiddleware, compose } from 'redux';
import createSagaMiddleware from 'redux-saga';
import Immutable from 'immutable';
import installDevTools from 'immutable-devtools';
import ducks from 'ducks';
import sagas from 'sagas';

// Make our store print nicely in the console
installDevTools(Immutable);

const isDev = process.env.NODE_ENV === 'development';

const devTools = isDev && window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__;
const composeEnhancers = devTools || compose;

const sagaMiddleware = createSagaMiddleware();

const configure = preloadedState => createStore(
  ducks,
  preloadedState, // for config preloaded states.
  composeEnhancers(applyMiddleware(sagaMiddleware)),
);

sagaMiddleware.run(mySaga);

export default storeConfig;
