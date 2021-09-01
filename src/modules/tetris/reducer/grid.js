import { handleActions } from 'redux-actions';

import { createGrid, createClearRow, createIndeterminateRow } from 'utils/createGrid';
import { haveSameCoordinates, moveDown as moveCelldown } from 'utils/cell';

import * as action from 'modules/main/actions';

import { CONFIG } from '../constants/config';

const { grid: { cols, rows } } = CONFIG;

export default handleActions({
  [action.tetris.stopGame]: () => createGrid(cols, rows),
  [action.tetris.startGame]: () => createGrid(cols, rows),
  [action.tetris.collideFigure]: (state, { payload: { currentFigure } }) => {
    const figureCells = currentFigure.getCells();
    return state.map(tr => tr.map((cell) => {
      const commonCell = figureCells.find(c => haveSameCoordinates(c, cell));
      return commonCell || cell;
    }));
  },
  [action.tetris.selectCompletedRow]: (state, { payload: { rowIndex } }) => {
    const first = state.slice(0, rowIndex);
    const rest = state.slice(rowIndex + 1);
    return [...first, createIndeterminateRow(cols, rowIndex), ...rest];
  },
  [action.tetris.removeCompletedRow]: (state, { payload: { rowIndex } }) => {
    const first = state
      .slice(0, rowIndex)
      .map(r => r.map(moveCelldown));
    const rest = state.slice(rowIndex + 1);
    return [createClearRow(cols, 0), ...first, ...rest];
  },
}, createGrid(cols, rows));
