import { createSelector } from 'reselect';
import { getState } from '../libs/cells';

export const getTetrisBoard = state => state.tetris.board;

export const getTetrisBoardCells = createSelector(
  getTetrisBoard,
  board => board.map(tr => tr.map(cell => getState(cell))),
);
