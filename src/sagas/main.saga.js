import { call, put } from 'redux-saga/effects';
import axios from 'axios';

import { actionCreators as actions } from 'ducks/main.duck';

export function fetchImageApi() {
  return axios.get('https://picsum.photos/list')
    .then(response => response.json())
    .then(json => console.log(json));
}

export function* fetchImages() {
  yield put(actions.requestData());
  const posts = yield call(fetchImageApi);
  yield put(actions.receivePosts(posts));
}
