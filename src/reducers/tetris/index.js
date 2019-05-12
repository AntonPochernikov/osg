import { combineReducers } from 'redux';
import { handleActions } from 'redux-actions';
import * as action from 'actions';
import board from './board.js';
import figure from './figure.js';

const gameState = handleActions({
  [action.startTetrisGame]: () => 'started',
  [action.stopTetrisGame]: () => 'initial',
  [action.finishTetrisGame]: () => 'finished',
  [action.pauseTetrisGame]: () => 'paused',
  [action.resumeTetrisGame]: () => 'started',
}, 'initial');

const speed = handleActions({
  [action.increaseTetrisGameSpeed]: state => (state === 10 ? state : state + 1),
  [action.decreaseTetrisGameSpeed]: state => (state === 1 ? state : state - 1),
}, 5);

const score = handleActions({
  // speed declared above so no destructuring here
  [action.collideTetrisFigure]: (state, { payload }) => state + payload.speed,
  [action.removeTetrisCompletedRow]: (state, { payload: { modificator } }) => state + 10 * modificator,
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
