import { handleActions } from 'redux-actions';
import * as action from 'actions';
import { createField, createClearRow, createIndeterminateRow } from 'libs/createField.js';
import { haveSameCoordinates, moveDown as moveCelldown } from 'libs/cell.js';

export default handleActions({
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
