import { fork, all } from 'redux-saga/effects';
import { watchFetchImages, watchSetupIpfs } from './main.saga';

export default function* rootSaga() {
  yield all([
    fork(watchFetchImages),
    fork(watchSetupIpfs)
  ]);
}
