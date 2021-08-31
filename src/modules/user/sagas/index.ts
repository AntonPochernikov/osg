import { all } from 'redux-saga/effects';
import { loginFlow } from './loginFlow';

export function* userSagas() {
  yield all([
    loginFlow(),
  ]);
}
