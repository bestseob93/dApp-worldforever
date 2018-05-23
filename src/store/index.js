import rootSaga from 'sagas';
import storeConfig from './storeConfig';

const store = storeConfig();

store.runSaga(rootSaga);

export default store;
