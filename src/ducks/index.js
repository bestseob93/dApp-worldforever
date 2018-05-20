import { combineReducers } from 'redux';

// except index.js file.
const req = require.context('.', true, /^(?!.\/index).*.js$/);

const reducers = {};

req.keys().forEach((key) => {
  const regex = /.\/(.*?).duck.js$/;
  const duckName = regex.test(key) && key.match(regex)[1];
  reducers[duckName] = req(key).default;
});

export default combineReducers(reducers);
