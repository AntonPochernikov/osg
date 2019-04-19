import { combineReducers } from 'redux';
import { handleActions } from 'redux-actions';
import * as action from '../../actions/index.js';
import { createField } from '../../libs/createField.js';
import getRandomFigure from '../../libs/figures/getRandomFigure.js';
import { create as createCell } from '../../libs/cells.js';

// const init = {
//   gameState: 'initial',
//   board: createField(10, 20),
//   currentFigure: {},
//   nextFigure: {},
//   speed: null,
//   score: 0,
// };

const gameState = handleActions({
  [action.startTetrisGame]: () => 'started',
  [action.stopTetrisGame]: () => 'initial',
  [action.pauseTetrisGame]: () => 'paused',
  [action.resumeTetrisGame]: () => 'started',
}, 'initial');

const board = handleActions({
  [action.stopTetrisGame]: () => createField(10, 20),
}, createField(10, 20));

const currentFigure = handleActions({
  [action.setCurrentTetrisFigure]: () => getRandomFigure(createCell([5, 0], 'active')),
  [action.moveTetrisFigureDown]: figure => figure.moveDown(),
  [action.fallTetrisFigureDown]: figure => figure.moveDown(),
  [action.stopTetrisGame]: () => null,
}, null);

const speed = handleActions({}, 5);

const score = handleActions({}, 0);

export default combineReducers({
  gameState,
  board,
  currentFigure,
  speed,
  score,
});
