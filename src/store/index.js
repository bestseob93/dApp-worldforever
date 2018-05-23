import rootSaga from 'sagas';
import storeConfig from './storeConfig';

// preloadedState here
const store = storeConfig();

store.runSaga(rootSaga);

export default store;
