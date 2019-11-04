import { all } from 'redux-saga/effects';
import tetrisFlow from './tetrisFlow';

export default function* tetrisSagas() {
  yield all([
    tetrisFlow(),
  ]);
}
