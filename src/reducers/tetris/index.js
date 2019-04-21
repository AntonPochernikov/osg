import { combineReducers } from 'redux';
import { handleActions } from 'redux-actions';
import * as action from '../../actions/index.js';
import { createField } from '../../libs/createField.js';
import getRandomFigure from '../../libs/figures/getRandomFigure.js';
import { cons as consCell, haveSameCoordinates } from '../../libs/cell.js';

const gameState = handleActions({
  [action.startTetrisGame]: () => 'started',
  [action.stopTetrisGame]: () => 'initial',
  [action.finishTetrisGame]: () => 'finished',
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

const figureInit = {
  current: null,
  next: null,
};
const figure = handleActions({
  [action.setCurrentTetrisFigure]: state => ({
    ...state,
    current: state.next || getRandomFigure(consCell([5, 0], 'active')),
  }),
  [action.setNextTetrisFigure]: state => ({
    ...state,
    next: getRandomFigure(consCell([5, 0], 'active')),
  }),
  [action.moveTetrisFigureDown]: state => ({
    ...state,
    current: state.current.moveDown(),
  }),
  [action.fallTetrisFigureDown]: state => ({
    ...state,
    current: state.current.moveDown(),
  }),
  [action.stopTetrisGame]: () => figureInit,
}, figureInit);

const speed = handleActions({}, 5);

const score = handleActions({}, 0);

export default combineReducers({
  gameState,
  board,
  figure,
  speed,
  score,
});
