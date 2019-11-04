import { combineReducers } from 'redux';
import { handleActions } from 'redux-actions';
import { snakeConfig } from 'constants/config';
import * as action from 'actions';
import Snake from 'libs/Snake';
import { cons as consCell, setState, paint } from 'libs/cell.js';
import generateNextCell from 'libs/generateNextCell';

const {
  speed: { init, min, max },
  grid: { cols, rows },
} = snakeConfig;

const gameState = handleActions({
  [action.snake.startGame]: () => 'started',
  [action.snake.stopGame]: () => 'initial',
  [action.snake.finishGame]: () => 'finished',
  [action.snake.pauseGame]: () => 'paused',
  [action.snake.resumeGame]: () => 'started',
}, 'initial');

const speed = handleActions({
  [action.snake.increaseGameSpeed]: state => (state === max ? state : state + 1),
  [action.snake.decreaseGameSpeed]: state => (state === min ? state : state - 1),
}, init);

const apple = handleActions({
  [action.snake.spawnApple]: (_, { payload: { apple } }) => apple,
  [action.snake.eatApple]: () => null,
  [action.snake.stopGame]: () => null,
}, null);

const body = handleActions({
  // TODO: generate snake
  [action.snake.startGame]: () => new Snake([
    consCell([Math.floor(cols / 2), rows - 6], { state: 'filled', color: 'yellow' }),
    consCell([Math.floor(cols / 2), rows - 5], { state: 'filled', color: 'yellow' }),
    consCell([Math.floor(cols / 2), rows - 4], { state: 'filled', color: 'yellow' }),
    consCell([Math.floor(cols / 2), rows - 3], { state: 'filled', color: 'yellow' }),
    consCell([Math.floor(cols / 2), rows - 2], { state: 'filled', color: 'yellow' }),
  ]),
  [action.snake.moveSnake]: (prevSnake, { payload: { direction } }) => prevSnake.move(
    generateNextCell(prevSnake.getHead(), direction),
  ),
  [action.snake.eatApple]: (prevSnake, { payload: { apple } }) => prevSnake.eat(
    paint(apple, 'yellow')
  ),
  [action.snake.stopGame]: () => null,
  [action.snake.finishGame]: (prevSnake) => new Snake(
    prevSnake.getCells().map(cell => setState(cell, 'indeterminate')),
  ),
}, null);

const direction = handleActions({
  [action.snake.startGame]: () => 'up',
  [action.snake.stopGame]: () => null,
  [action.snake.finishGame]: () => null,
  [action.snake.moveSnake]: (_, { payload: { direction } }) => direction,
}, null);

export default combineReducers({
  gameState,
  body,
  direction,
  apple,
  speed,
});
