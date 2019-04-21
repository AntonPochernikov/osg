import { combineReducers } from 'redux';
import { handleActions } from 'redux-actions';
import * as action from '../../actions/index.js';
import { createField, createClearRow, createIndeterminateRow } from '../../libs/createField.js';
import getRandomFigure from '../../libs/figures/getRandomFigure.js';
import { cons as consCell, haveSameCoordinates, moveDown as moveCelldown } from '../../libs/cell.js';

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
  [action.selectTetrisCompletedRow]: (state, { payload: { rowIndex } }) => {
    const first = state.slice(0, rowIndex);
    const rest = state.slice(rowIndex + 1);
    return [...first, createIndeterminateRow(10, rowIndex), ...rest];
  },
  [action.removeTetrisCompletedRow]: (state, { payload: { rowIndex } }) => {
    const first = state
      .slice(0, rowIndex)
      .map(r => r.map(c => moveCelldown(c)));
    const rest = state.slice(rowIndex + 1);
    return [createClearRow(10, 0), ...first, ...rest];
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
  [action.collideTetrisFigure]: state => ({
    ...state,
    current: null,
  }),
  [action.moveTetrisFigureDown]: state => ({
    ...state,
    current: state.current.moveDown(),
  }),
  [action.moveTetrisFigureLeft]: state => ({
    ...state,
    current: state.current.moveLeft(),
  }),
  [action.moveTetrisFigureRight]: state => ({
    ...state,
    current: state.current.moveRight(),
  }),
  [action.rotateTetrisFigure]: state => ({
    ...state,
    current: state.current.rotate(),
  }),
  [action.fallTetrisFigureDown]: state => ({
    ...state,
    current: state.current.moveDown(),
  }),
  [action.stopTetrisGame]: () => figureInit,
}, figureInit);

const speed = handleActions({
  [action.increaseTetrisGameSpeed]: state => state + 1,
  [action.decreaseTetrisGameSpeed]: state => state - 1,
}, 5);

const score = handleActions({
  [action.collideTetrisFigure]: state => state + 1,
  [action.removeTetrisCompletedRow]: state => state + 10,
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
