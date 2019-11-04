import { all } from 'redux-saga/effects';
import loginFlow from './loginFlow';

export default function* userSagas() {
  yield all([
    loginFlow(),
  ]);
}
