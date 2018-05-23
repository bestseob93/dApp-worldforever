import { fromJS } from 'immutable';
import { createAction, handleActions } from 'redux-actions';

export const types = {
  REQUEST_DATA: 'main/REQUEST_DATA',
  RECEIVE_DATA: 'main/RECEIVE_DATA'
};

export const actionCreators = {
  requestData: createAction(types.REQUEST_DATA),
  receiveData: createAction(types.RECEIVE_DATA)
};

const defaultState = fromJS({
  datas: []
});

export default handleActions({
  [types.REQUEST_DATA]: (state) => {
    return state;
  },
  [types.RECEIVE_DATA]: (state, action) => {
    return state.set('datas', fromJS(action.payload));
  }
}, defaultState);
