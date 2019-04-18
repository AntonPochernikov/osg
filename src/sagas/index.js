import {
  put,
  takeEvery,
  all,
  // select,
} from 'redux-saga/effects';
import * as action from '../actions';

// const delay = ms => new Promise((res) => {
//   setTimeout(res, ms);
// });

function* createFigure() {
  yield put(action.setCurrentTetrisFigure());
}

function* getNextFigure() {
  yield put(action.setNextTetrisFigure());
}

function* watchTetrisGameStart() {
  yield takeEvery('TETRIS/GAME/START', createFigure);
  yield takeEvery('TETRIS/GAME/START', getNextFigure);
}

export default function* rootSaga() {
  yield all([
    watchTetrisGameStart(),
  ]);
}
