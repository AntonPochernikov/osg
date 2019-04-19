import {
  put,
  take,
  call,
  // fork,
  // cancel,
  // cancelled,
  select,
  race,
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
      const { pause } = yield race({
        delay: call(delay, interval),
        pause: take('TETRIS/GAME/PAUSE'),
      });
      if (pause) {
        yield take('TETRIS/GAME/RESUME');
      } else {
        yield put(action.fallTetrisFigureDown());
      }
    } catch (e) {
      console.log(e);
      yield put(action.finishTetrisGame());
    }
  }
}

function* figureFlow() {
  while (true) {
    yield put(action.setCurrentTetrisFigure());
    yield put(action.setNextTetrisFigure());
    yield race({
      fall: call(figureFall),
      falldown: take('TETRIS/GAME/FIGURE/FELL_DOWN'),
    });
  }
}

export default function* gameFlow() {
  while (true) {
    yield take('TETRIS/GAME/START');
    yield race({
      figure: call(figureFlow),
      stop: take('TETRIS/GAME/STOP'),
      finish: take('TETRIS/GAME/FINISH'),
    });
  }
}
