import { combineReducers } from 'redux';
import { handleActions } from 'redux-actions';
import * as action from 'actions';
import { tetrisConfig as config } from 'constants/config.js';
import grid from './grid.js';
import figure from './figure.js';

const {
  speed: { min, max, init },
  score: { collision, completedRow }
} = config;

const gameState = handleActions({
  [action.tetris.startGame]: () => 'started',
  [action.tetris.stopGame]: () => 'initial',
  [action.tetris.finishGame]: () => 'finished',
  [action.tetris.pauseGame]: () => 'paused',
  [action.tetris.resumeGame]: () => 'started',
}, 'initial');

const speed = handleActions({
  [action.tetris.increaseGameSpeed]: state => (state === max ? state : state + 1),
  [action.tetris.decreaseGameSpeed]: state => (state === min ? state : state - 1),
}, init);

const score = handleActions({
  // speed declared above so no destructuring here
  [action.tetris.collideFigure]: (state, { payload }) => state + collision * payload.speed,
  [action.tetris.removeCompletedRow]: (state, { payload: { modificator } }) => state + completedRow * modificator,
  [action.tetris.startGame]: () => 0,
  [action.tetris.stopGame]: () => 0,
}, 0);

export default combineReducers({
  gameState,
  grid,
  figure,
  speed,
  score,
});
