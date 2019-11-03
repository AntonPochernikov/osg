import { all } from 'redux-saga/effects';
import loginFlow from './loginFlow';
import tetrisFlow from './tetrisFlow';
import snakeFlow from './snakeFlow';

export default function* rootSaga() {
  yield all([
    loginFlow(),
    tetrisFlow(),
    snakeFlow(),
  ]);
}
