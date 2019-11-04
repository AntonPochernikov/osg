import { all } from 'redux-saga/effects';
import userSagas from 'modules/user/sagas';
import tetrisSagas from 'modules/tetris/sagas';
import snakeSagas from 'modules/snake/sagas';

export default function* rootSaga() {
  yield all([
    userSagas(),
    tetrisSagas(),
    snakeSagas(),
  ]);
}
