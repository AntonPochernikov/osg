import {
  put,
  take,
  call,
  select,
  race,
  takeEvery,
} from 'redux-saga/effects';
import * as action from '../actions';
import * as selector from '../selectors';

const delay = ms => new Promise((res) => {
  setTimeout(res, ms);
});

function* selectCompletedRow(row) {
  yield put(action.selectTetrisCompletedRow({ rowIndex: row }));
  const { pause } = yield race({
    pause: take('TETRIS/GAME/PAUSE'),
    delay: call(delay, 200),
  });
  if (pause) {
    yield take('TETRIS/GAME/RESUME');
  }
}

function* removeCompletedRow(row) {
  yield put(action.removeTetrisCompletedRow({ rowIndex: row }));
  const { pause } = yield race({
    pause: take('TETRIS/GAME/PAUSE'),
    delay: call(delay, 100),
  });
  if (pause) {
    yield take('TETRIS/GAME/RESUME');
  }
}

function* manageCompletedRows(rows) {
  for (let i = 0; i < rows.length; i += 1) {
    yield call(selectCompletedRow, rows[i]);
    yield call(removeCompletedRow, rows[i]);
  }
}

function* checkFigureMoveLeft() {
  if (yield select(selector.canTetrisFigureMoveLeft)) {
    yield put(action.moveTetrisFigureLeft());
  }
}
function* checkFigureMoveRight() {
  if (yield select(selector.canTetrisFigureMoveRight)) {
    yield put(action.moveTetrisFigureRight());
  }
}
function* checkFigureRotate() {
  if (yield select(selector.canTetrisFigureRotate)) {
    yield put(action.rotateTetrisFigure());
  }
}

function* figureFlow() {
  yield takeEvery('TETRIS/FIGURE/TRY/LEFT', checkFigureMoveLeft);
  yield takeEvery('TETRIS/FIGURE/TRY/RIGHT', checkFigureMoveRight);
  yield takeEvery('TETRIS/FIGURE/TRY/ROTATE', checkFigureRotate);
  while (true) {
    try {
      const interval = yield select(selector.getTetrisFallInterval);
      const { pause } = yield race({
        delay: call(delay, interval),
        pause: take('TETRIS/GAME/PAUSE'),
        moveDown: take('TETRIS/FIGURE/TRY/DOWN'),
      });
      if (pause) {
        yield take('TETRIS/GAME/RESUME');
      }
      if (!(yield select(selector.canTetrisFigureMoveDown))) {
        const currentFigure = yield select(selector.getTetrisCurrentFigure);
        yield put(action.collideTetrisFigure({ currentFigure }));
      }
      yield put(action.fallTetrisFigureDown());
    } catch (e) {
      console.log(e);
      yield put(action.finishTetrisGame());
    }
  }
}

function* figures() {
  while (true) {
    yield put(action.setCurrentTetrisFigure());
    yield put(action.setNextTetrisFigure());
    if (!(yield select(selector.canTetrisFigureMoveDown))) {
      yield put(action.finishTetrisGame());
    }
    yield race({
      fall: call(figureFlow),
      collision: take('TETRIS/FIGURE/COLLIDE'),
    });
    const completedRows = yield select(selector.getTetrisCompletedRows);
    yield call(manageCompletedRows, completedRows);
  }
}

export default function* game() {
  while (true) {
    yield take('TETRIS/GAME/START');
    yield race({
      figures: call(figures),
      stop: take('TETRIS/GAME/STOP'),
      finish: take('TETRIS/GAME/FINISH'),
    });
  }
}
