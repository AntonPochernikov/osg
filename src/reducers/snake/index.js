import { combineReducers } from 'redux';
import { handleActions } from 'redux-actions';
import { snakeConfig } from 'constants/config';
import * as action from 'actions';

const { speed: { init, min, max } } = snakeConfig;

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

const apple = handleActions({}, null);
const snake = handleActions({}, null);

export default combineReducers({
  gameState,
  snake,
  apple,
  speed,
});
