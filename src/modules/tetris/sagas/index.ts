import { all } from 'redux-saga/effects';
import { tetrisFlow } from './tetrisFlow';

export function* tetrisSagas() {
  yield all([
    tetrisFlow(),
  ]);
}
