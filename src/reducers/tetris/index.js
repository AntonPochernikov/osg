import { combineReducers } from 'redux';
import { handleActions } from 'redux-actions';
import * as action from '../../actions/index.js';
import { createField } from '../../libs/createField.js';
import getRandomFigure from '../../libs/figures/getRandomFigure.js';
import { cons as consCell, haveSameCoordinates } from '../../libs/cells.js';

// const init = {
//   nextFigure: {},
// };

const gameState = handleActions({
  [action.startTetrisGame]: () => 'started',
  [action.stopTetrisGame]: () => 'initial',
  [action.finishTetrisGame]: () => 'initial',
  [action.pauseTetrisGame]: () => 'paused',
  [action.resumeTetrisGame]: () => 'started',
}, 'initial');

const board = handleActions({
  [action.stopTetrisGame]: () => createField(10, 20),
  [action.startTetrisGame]: () => createField(10, 20),
  [action.collideTetrisFigure]: (state, { payload: { currentFigure } }) => {
    const figureCells = currentFigure.getCells();
    return state.map(tr => tr.map((cell) => {
      const commonCell = figureCells.find(c => haveSameCoordinates(c, cell));
      return commonCell || cell;
    }));
  },
}, createField(10, 20));

const currentFigure = handleActions({
  [action.setCurrentTetrisFigure]: () => getRandomFigure(consCell([5, 0], 'active')),
  [action.moveTetrisFigureDown]: figure => figure.moveDown(),
  [action.fallTetrisFigureDown]: figure => figure.moveDown(),
  [action.stopTetrisGame]: () => null,
}, null);

const nextFigure = handleActions({}, null);

const speed = handleActions({}, 5);

const score = handleActions({}, 0);

export default combineReducers({
  gameState,
  board,
  currentFigure,
  nextFigure,
  speed,
  score,
});
