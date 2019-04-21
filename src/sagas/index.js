import { all } from 'redux-saga/effects';
import loginFlow from './loginFlow.js';
import tetrisFlow from './tetrisFlow.js';

export default function* rootSaga() {
  yield all([
    loginFlow(),
    tetrisFlow(),
  ]);
}
