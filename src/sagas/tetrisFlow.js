import {
  put,
  take,
  call,
  select,
  race,
  takeEvery,
} from 'redux-saga/effects';
import * as action from 'actions';
import * as selector from 'selectors';
import delay from 'libs/delay.js';

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

function* removeCompletedRow(row, rowCount) {
  const speed = yield select(selector.tetris.getSpeed);
  yield put(action.removeTetrisCompletedRow({ rowIndex: row, modificator: rowCount * speed }));
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
    yield call(removeCompletedRow, rows[i], rows.length);
  }
}

function* checkFigureMoveLeft() {
  if (yield select(selector.tetris.canFigureMoveLeft)) {
    yield put(action.moveTetrisFigureLeft());
  }
}
function* checkFigureMoveRight() {
  if (yield select(selector.tetris.canFigureMoveRight)) {
    yield put(action.moveTetrisFigureRight());
  }
}
function* checkFigureRotate() {
  if (yield select(selector.tetris.canFigureRotate)) {
    yield put(action.rotateTetrisFigure());
  }
}

function* figureFlow() {
  yield takeEvery('TETRIS/FIGURE/TRY/LEFT', checkFigureMoveLeft);
  yield takeEvery('TETRIS/FIGURE/TRY/RIGHT', checkFigureMoveRight);
  yield takeEvery('TETRIS/FIGURE/TRY/ROTATE', checkFigureRotate);
  while (true) {
    try {
      const interval = yield select(selector.tetris.getFallInterval);
      const { pause } = yield race({
        delay: call(delay, interval),
        pause: take('TETRIS/GAME/PAUSE'),
        moveDown: take('TETRIS/FIGURE/TRY/DOWN'),
      });
      if (pause) {
        yield take('TETRIS/GAME/RESUME');
      }
      if (!(yield select(selector.tetris.canFigureMoveDown))) {
        const currentFigure = yield select(selector.tetris.getCurrentFigure);
        const speed = yield select(selector.tetris.getSpeed);
        yield put(action.collideTetrisFigure({ currentFigure, speed }));
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
    if (!(yield select(selector.tetris.canFigureMoveDown))) {
      yield put(action.finishTetrisGame());
    }
    yield race({
      fall: call(figureFlow),
      collision: take('TETRIS/FIGURE/COLLIDE'),
    });
    const completedRows = yield select(selector.tetris.getCompletedRows);
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
