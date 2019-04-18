import { combineReducers } from 'redux';
import { handleActions } from 'redux-actions';
import * as action from '../../actions/index.js';
import { createField } from '../../libs/createField.js';

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
}, 'initial');

const board = handleActions({}, createField(10, 20));

const currentFigure = handleActions({
  [action.setCurrentTetrisFigure]: () => ({}),
}, null);

export default combineReducers({
  gameState,
  board,
  currentFigure,
});
