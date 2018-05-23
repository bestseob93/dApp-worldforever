import { take, call, put } from 'redux-saga/effects';
import axios from 'axios';

import { types, actionCreators as actions } from 'ducks/main.duck';

console.log(actions.receiveData);

export function fetchImageApi() {
  console.log('api called');
  return axios.get('https://picsum.photos/list')
    .then(response => {
      return response.data;
    });
}

export function* watchFetchImages() {
  console.log('saga called');
  while (true) {
    yield take(types.REQUEST_DATA);
    const datas = yield call(fetchImageApi);
    console.log(datas);
    yield put(actions.receiveData(datas));
  }
}
