import { createSelector } from 'reselect';
import { getState } from '../libs/cells';

export const getTetrisBoard = state => state.tetris.board;
export const getTetrisSpeed = state => state.tetris.speed;
export const getTetrisGameState = state => state.tetris.gameState;

export const getTetrisBoardCells = createSelector(
  getTetrisBoard,
  board => board.map(tr => tr.map(cell => getState(cell))),
);

export const getTetrisFallInterval = createSelector(
  getTetrisSpeed,
  speed => (11 - speed) * 100,
);

export const isTetrisGameStarted = createSelector(
  getTetrisGameState,
  state => state === 'started',
);
