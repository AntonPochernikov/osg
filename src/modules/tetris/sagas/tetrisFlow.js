import {
  put,
  take,
  call,
  select,
  race,
  takeEvery,
} from 'redux-saga/effects';

import { sleep } from 'utils/sleep';

import * as action from 'modules/main/actions';
import * as selector from 'modules/main/selectors';

function* selectCompletedRow(row) {
  yield put(action.tetris.selectCompletedRow({ rowIndex: row }));
  const { pause } = yield race({
    pause: take('TETRIS/GAME/PAUSE'),
    delay: call(sleep, 200),
  });
  if (pause) {
    yield take('TETRIS/GAME/RESUME');
  }
}

function* removeCompletedRow(row, rowCount) {
  const speed = yield select(selector.tetris.getSpeed);
  yield put(action.tetris.removeCompletedRow({ rowIndex: row, modificator: rowCount * speed }));
  const { pause } = yield race({
    pause: take('TETRIS/GAME/PAUSE'),
    delay: call(sleep, 100),
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
    yield put(action.tetris.moveFigureLeft());
  }
}
function* checkFigureMoveRight() {
  if (yield select(selector.tetris.canFigureMoveRight)) {
    yield put(action.tetris.moveFigureRight());
  }
}
function* checkFigureRotate() {
  if (yield select(selector.tetris.canFigureRotate)) {
    yield put(action.tetris.rotateFigure());
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
        delay: call(sleep, interval),
        pause: take('TETRIS/GAME/PAUSE'),
        moveDown: take('TETRIS/FIGURE/TRY/DOWN'),
      });
      if (pause) {
        yield take('TETRIS/GAME/RESUME');
      }
      if (!(yield select(selector.tetris.canFigureMoveDown))) {
        const currentFigure = yield select(selector.tetris.getCurrentFigure);
        const speed = yield select(selector.tetris.getSpeed);
        yield put(action.tetris.collideFigure({ currentFigure, speed }));
      }
      yield put(action.tetris.fallFigureDown());
    } catch (e) {
      console.log(e);
      yield put(action.tetris.finishGame());
    }
  }
}

function* figures() {
  while (true) {
    yield put(action.tetris.setCurrentFigure());
    yield put(action.tetris.setNextFigure());
    if (!(yield select(selector.tetris.canFigureMoveDown))) {
      yield put(action.tetris.finishGame());
    }
    yield race({
      fall: call(figureFlow),
      collision: take('TETRIS/FIGURE/COLLIDE'),
    });
    const completedRows = yield select(selector.tetris.getCompletedRows);
    yield call(manageCompletedRows, completedRows);
  }
}

export function* tetrisFlow() {
  while (true) {
    yield take('TETRIS/GAME/START');
    yield race({
      figures: call(figures),
      stop: take('TETRIS/GAME/STOP'),
      finish: take('TETRIS/GAME/FINISH'),
    });
  }
}
