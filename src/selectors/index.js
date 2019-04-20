import { createSelector } from 'reselect';
import {
  getCoordinates,
  haveSameCoordinates,
  getState,
  isActive,
} from '../libs/cells';

export const getTetrisBoard = state => state.tetris.board;
export const getTetrisSpeed = state => state.tetris.speed;
export const getTetrisGameState = state => state.tetris.gameState;
export const getTetrisCurrentFigure = state => state.tetris.currentFigure;

export const getTetrisBoardCells = createSelector(
  getTetrisBoard,
  getTetrisCurrentFigure,
  (board, figure) => {
    if (figure) {
      const figureCells = figure.getCells();
      return board.map(tr => tr.map((cell) => {
        if (figureCells.some(c => haveSameCoordinates(c, cell))) {
          return 'active';
        }
        return getState(cell);
      }));
    }
    return board.map(tr => tr.map(cell => getState(cell)));
  },
);

export const getTetrisFallInterval = createSelector(
  getTetrisSpeed,
  speed => (11 - speed) * 100,
);

export const isTetrisGameStarted = createSelector(
  getTetrisGameState,
  state => state === 'started',
);

export const doesTetrisFigureCollide = createSelector(
  getTetrisBoard,
  getTetrisCurrentFigure,
  (board, figure) => figure
    .getCells()
    .some((cell) => {
      const [col, row] = getCoordinates(cell);
      return row === board.length - 1 || isActive(board[row + 1][col]);
    }),
);
