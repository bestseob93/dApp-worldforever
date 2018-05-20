import { fromJS } from 'immutable';
import { createAction, handleActions } from 'redux-actions';

export const types = {
    REQUEST_DATA: 'main/REQUEST_DATA'
};

export const requestData = createAction(REQUEST_DATA);

const defaultState = fromJS({
  datas: []
});

export default handleActions({
  [types.REQUEST_DATA]: (state, action) => {
    return state.set('datas', action.payload);
  }
}, defaultState);
