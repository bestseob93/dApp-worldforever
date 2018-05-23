import { take, call, put } from 'redux-saga/effects';
import { fetchImageApi } from 'lib/API/test';

import { types, actionCreators as actions } from 'ducks/main.duck';

console.log(actions.receiveData);

export function* watchFetchImages() {
  console.log('saga called');
  while (true) {
    yield take(types.REQUEST_DATA);
    const datas = yield call(fetchImageApi);
    console.log(datas);
    yield put(actions.receiveData(datas));
  }
}
