import {
  put,
  take,
  call,
  select,
  race,
} from 'redux-saga/effects';
import * as action from 'actions';
import * as selector from 'selectors';
import delay from 'libs/delay';
import { cons as consCell } from 'libs/cell.js';
import { snakeConfig } from 'constants/config';
import isAllowedDirection from 'libs/isAllowedDirection';

const { grid: { cols, rows } } = snakeConfig;

function* movement() {
  while (true) {
    try {
      const interval = yield select(selector.snake.getIncrementInterval);
      const { pause, playerMove } = yield race({
        delay: call(delay, interval),
        pause: take('SNAKE/GAME/PAUSE'),
        playerMove: take('SNAKE/BODY/CHECK/MOVE'),
      });

      if (pause) {
        yield take('SNAKE/GAME/RESUME');
      }

      const prevDirection = yield select(selector.snake.getDirection);
      const nextDirection = playerMove ? playerMove.payload : prevDirection;

      // moved to not allowed direction
      if (isAllowedDirection(prevDirection, nextDirection)) {
        yield put(action.snake.moveSnake({ direction: nextDirection }));
      } else {
        yield put(action.snake.moveSnake({ direction: prevDirection }));
      }

      // snake collides after move
      if (yield select(selector.snake.isSnakeColliding)) {
        yield put(action.snake.finishGame());
      }

      // snake eats apple
      if (yield select(selector.snake.doesSnakeEatApple)) {
        return;
      }
    } catch (e) {
      console.log(e);
      yield put(action.snake.finishGame());
    }
  }
}

function* applesLoop() {
  while (true) {
    // TODO: spawn random apple
    const apple = consCell(
      [Math.floor(cols / 2), Math.floor(rows / 2)],
      { state: 'filled', color: 'green' },
    );
    yield put(action.snake.spawnApple({ apple }));
    yield call(movement);
  }
}

export default function* game() {
  while (true) {
    yield take('SNAKE/GAME/START');
    yield race({
      applesLoop: call(applesLoop),
      stop: take('SNAKE/GAME/STOP'),
      finish: take('SNAKE/GAME/FINISH'),
    });
  }
}
