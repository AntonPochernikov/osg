import {
  put,
  take,
  call,
  fork,
  cancel,
  cancelled,
  select,
} from 'redux-saga/effects';
import * as action from '../actions';
import * as selector from '../selectors';

const delay = ms => new Promise((res) => {
  setTimeout(res, ms);
});

function* figureFall() {
  while (true) {
    try {
      const interval = yield select(selector.getTetrisFallInterval);
      yield call(delay, interval);
      yield put(action.fallTetrisFigureDown());
    } catch (e) {
      console.log(e);
    } finally {
      if (yield cancelled()) {
        console.log('canceled');
      }
    }
  }
}

function* figureFlow() {
  yield put(action.setCurrentTetrisFigure());
  yield put(action.setNextTetrisFigure());
  const figureFalling = yield fork(figureFall);
  yield take(['TETRIS/GAME/FINISH', 'TETRIS/GAME/PAUSE']);
  yield cancel(figureFalling);
}

export default function* gameFlow() {
  while (true) {
    yield take('TETRIS/GAME/START');
    yield call(figureFlow);
    yield take('TETRIS/GAME/STOP');
  }
}
