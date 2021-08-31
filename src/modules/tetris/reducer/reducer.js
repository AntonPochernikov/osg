import { combineReducers } from 'redux';
import { handleActions } from 'redux-actions';

import * as action from 'modules/main/actions';

import { CONFIG } from '../constants/config';
import grid from './grid';
import figure from './figure';

const {
  speed: { min, max, init },
  score: { collision, completedRow }
} = CONFIG;

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

// TODO: add reducer key

export const tetrisReducer = combineReducers({
  gameState,
  grid,
  figure,
  speed,
  score,
});
