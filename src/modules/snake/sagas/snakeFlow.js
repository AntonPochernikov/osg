import {
  put,
  take,
  call,
  select,
  race,
} from 'redux-saga/effects';

import { sleep } from 'libs/sleep';

import * as action from 'modules/main/actions';
import * as selector from 'modules/main/selectors';

import { isAllowedDirection } from '../libs/isAllowedDirection';
import { generateApple } from '../libs/generateApple';

function* movement(apple) {
  while (true) {
    try {
      const interval = yield select(selector.snake.getIncrementInterval);
      const { pause, playerMove } = yield race({
        delay: call(sleep, interval),
        pause: take('SNAKE/GAME/PAUSE'),
        playerMove: take('SNAKE/BODY/CHECK/MOVE'),
      });

      if (pause) {
        yield take('SNAKE/GAME/RESUME');
      }

      // snake eats apple
      if (yield select(selector.snake.doesSnakeEatApple)) {
        yield put(action.snake.eatApple({ apple }));
        return;
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
    } catch (e) {
      console.log(e);
      yield put(action.snake.finishGame());
    }
  }
}

function* applesLoop() {
  while (true) {
    const snake = yield select(selector.snake.getBody);
    const apple = generateApple(snake);
    yield put(action.snake.spawnApple({ apple }));
    yield call(movement, apple);
  }
}

export function* snakeFlow() {
  while (true) {
    yield take('SNAKE/GAME/START');
    yield race({
      applesLoop: call(applesLoop),
      stop: take('SNAKE/GAME/STOP'),
      finish: take('SNAKE/GAME/FINISH'),
    });
  }
}
