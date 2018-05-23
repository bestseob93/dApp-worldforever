import { fork, all } from 'redux-saga/effects';
import { watchFetchImages } from './main.saga';

export default function* rootSaga() {
  yield all([
    fork(watchFetchImages)
  ]);
}
