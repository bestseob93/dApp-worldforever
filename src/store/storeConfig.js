import { createStore, applyMiddleware, compose } from 'redux';
import createSagaMiddleware, { END } from 'redux-saga';
import Immutable from 'immutable';
import installDevTools from 'immutable-devtools';
import ducks from 'ducks';

// Make our store print nicely in the console
installDevTools(Immutable);

const isDev = process.env.NODE_ENV === 'development';

export default function storeConfig(preloadedState) {
  const devTools = isDev && window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__;
  const composeEnhancers = devTools || compose;

  const sagaMiddleware = createSagaMiddleware();

  const store = createStore(
    ducks,
    preloadedState, // for config preloaded states.
    composeEnhancers(applyMiddleware(sagaMiddleware)),
  );

  store.runSaga = sagaMiddleware.run;
  store.close = () => store.dispatch(END);

  return store;
}
