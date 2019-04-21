import { createSelector } from 'reselect';
import { createField } from '../libs/createField.js';
import {
  getCoordinates,
  haveSameCoordinates,
  getState,
  isActive,
} from '../libs/cell.js';

export const getTetrisBoard = state => state.tetris.board;
export const getTetrisCurrentFigure = state => state.tetris.figure.current;
export const getTetrisNextFigure = state => state.tetris.figure.next;
export const getTetrisSpeed = state => state.tetris.speed;
export const getTetrisGameState = state => state.tetris.gameState;

// add current figure on board
export const getTetrisBoardCells = createSelector(
  getTetrisBoard,
  getTetrisCurrentFigure,
  (board, figure) => {
    if (figure) {
      const figureCells = figure.getCells();
      return board.map(tr => tr.map((cell) => {
        const commonCell = figureCells.find(c => haveSameCoordinates(c, cell));
        if (commonCell) {
          return getState(commonCell);
        }
        return getState(cell);
      }));
    }
    return board.map(tr => tr.map(cell => getState(cell)));
  },
);

export const getTetrisNextFigurePreview = createSelector(
  getTetrisNextFigure,
  (figure) => {
    if (!figure) {
      return [];
    }
    const { height, width } = figure.getSize();
    const boardW = width + 2;
    const boardH = height + 2;
    const board = createField(boardW, boardH);
    const figureCells = figure.setPosition(Math.floor(boardW / 2), 1).getCells();
    return board.map(tr => tr.map((cell) => {
      const commonCell = figureCells.find(c => haveSameCoordinates(c, cell));
      if (commonCell) {
        return getState(commonCell);
      }
      return getState(cell);
    }));
  },
);

export const getTetrisCompletedRows = createSelector(
  getTetrisBoard,
  board => board.reduce((acc, row, i) => {
    if (row.every(c => isActive(c))) {
      return [...acc, i];
    }
    return acc;
  }, []),
);

export const getTetrisFallInterval = createSelector(
  getTetrisSpeed,
  speed => (11 - speed) * 50,
);

export const isTetrisGameStarted = createSelector(
  getTetrisGameState,
  state => state === 'started',
);

// figure collision predicate
export const canTetrisFigureMoveDown = createSelector(
  getTetrisBoard,
  getTetrisCurrentFigure,
  (board, figure) => figure && figure
    .getCells()
    .every((cell) => {
      const [col, row] = getCoordinates(cell);
      return row !== board.length - 1 && !isActive(board[row + 1][col]);
    }),
);

export const canTetrisFigureMoveLeft = createSelector(
  getTetrisBoard,
  getTetrisCurrentFigure,
  (board, figure) => figure && figure
    .getCells()
    .every((cell) => {
      const [col, row] = getCoordinates(cell);
      return col !== 0 && !isActive(board[row][col - 1]);
    }),
);

export const canTetrisFigureMoveRight = createSelector(
  getTetrisBoard,
  getTetrisCurrentFigure,
  (board, figure) => figure && figure
    .getCells()
    .every((cell) => {
      const [col, row] = getCoordinates(cell);
      return col !== board[row].length - 1 && !isActive(board[row][col + 1]);
    }),
);

export const canTetrisFigureRotate = createSelector(
  getTetrisBoard,
  getTetrisCurrentFigure,
  (board, figure) => figure && figure
    .rotate()
    .getCells()
    .every((cell) => {
      const [col, row] = getCoordinates(cell);
      // outside top or bottom
      if (row < 0 || row > board.length - 1) {
        return false;
      }
      // outside left or right
      if (col < 0 || col > board[row].length - 1) {
        return false;
      }
      // will collide with active board cells
      return !isActive(board[row][col]);
    }),
);
