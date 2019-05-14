import { combineReducers } from 'redux';
import { handleActions } from 'redux-actions';
import * as action from 'actions';
import { tetrisConfig } from 'constants/config.js';
import board from './board.js';
import figure from './figure.js';

const { speed: { min, max, init }, score: { collision, completedRow } } = tetrisConfig;

const gameState = handleActions({
  [action.startTetrisGame]: () => 'started',
  [action.stopTetrisGame]: () => 'initial',
  [action.finishTetrisGame]: () => 'finished',
  [action.pauseTetrisGame]: () => 'paused',
  [action.resumeTetrisGame]: () => 'started',
}, 'initial');

const speed = handleActions({
  [action.increaseTetrisGameSpeed]: state => (state === max ? state : state + 1),
  [action.decreaseTetrisGameSpeed]: state => (state === min ? state : state - 1),
}, init);

const score = handleActions({
  // speed declared above so no destructuring here
  [action.collideTetrisFigure]: (state, { payload }) => state + collision * payload.speed,
  [action.removeTetrisCompletedRow]: (state, { payload: { modificator } }) => state + completedRow * modificator,
  [action.startTetrisGame]: () => 0,
  [action.stopTetrisGame]: () => 0,
}, 0);

export default combineReducers({
  gameState,
  board,
  figure,
  speed,
  score,
});
