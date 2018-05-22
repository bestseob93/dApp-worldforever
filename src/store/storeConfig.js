import { createStore, applyMiddleware, compose } from 'redux';
import createSagaMiddleware from 'redux-saga';
import Immutable from 'immutable';
import installDevTools from 'immutable-devtools';
import ducks from 'ducks';
import { fetchImages } from 'sagas/main.saga';

console.log(fetchImages);

// Make our store print nicely in the console
installDevTools(Immutable);

const isDev = process.env.NODE_ENV === 'development';

const devTools = isDev && window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__;
const composeEnhancers = devTools || compose;

const middlewares = [
  createSagaMiddleware(fetchImages)
];

const storeConfig = preloadedState => createStore(
  ducks,
  preloadedState, // for config preloaded states.
  composeEnhancers(applyMiddleware(...middlewares)),
);

export default storeConfig;
