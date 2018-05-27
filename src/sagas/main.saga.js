import { take, call, put } from 'redux-saga/effects';
import IPFS from 'ipfs-mini';
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

export function* watchSetupIpfs() {
  while (true) {
    yield take(types.INIT_IPFS);
    const ipfs = new IPFS({ host: 'ipfs.infura.io', port: 5001, protocol: 'https' });
    yield put(actions.setupIpfs(ipfs));
  }
}
