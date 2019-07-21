import { createSelector } from 'reselect';
import { createField } from 'libs/createField.js';
import {
  getCoordinates,
  haveSameCoordinates,
  getState,
  isFilled,
} from 'libs/cell.js';
import times from 'libs/times.js';
import { tetrisConfig } from 'constants/config.js';

export const getBoard = state => state.tetris.board;
export const getCurrentFigure = state => state.tetris.figure.current;
export const getNextFigure = state => state.tetris.figure.next;
export const getSpeed = state => state.tetris.speed;
export const getScore = state => state.tetris.score;
export const getGameState = state => state.tetris.gameState;

// add current figure on board
export const getBoardCells = createSelector(
  [getBoard, getCurrentFigure],
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

export const getNextFigurePreview = createSelector(
  getNextFigure,
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

export const getCompletedRows = createSelector(
  getBoard,
  board => board.reduce((acc, row, i) => {
    if (row.every(c => isFilled(c))) {
      return [...acc, i];
    }
    return acc;
  }, []),
);

const { speed: { modificator }, interval } = tetrisConfig;
export const getFallInterval = createSelector(
  getSpeed,
  // increase speed for 30% every time we add speed
  speed => times(x => modificator * x, speed - 1)(interval),
);

export const isGameStarted = createSelector(
  getGameState,
  state => state === 'started',
);

export const canAdjustSpeed = createSelector(
  getGameState,
  state => (state === 'initial' || state === 'finished'),
);

// figure collision predicate
export const canFigureMoveDown = createSelector(
  [getBoard, getCurrentFigure],
  (board, figure) => figure && figure
    .getCells()
    .every((cell) => {
      const [col, row] = getCoordinates(cell);
      return row !== board.length - 1 && !isFilled(board[row + 1][col]);
    }),
);

export const canFigureMoveLeft = createSelector(
  [getBoard, getCurrentFigure],
  (board, figure) => figure && figure
    .getCells()
    .every((cell) => {
      const [col, row] = getCoordinates(cell);
      return col !== 0 && !isFilled(board[row][col - 1]);
    }),
);

export const canFigureMoveRight = createSelector(
  [getBoard, getCurrentFigure],
  (board, figure) => figure && figure
    .getCells()
    .every((cell) => {
      const [col, row] = getCoordinates(cell);
      return col !== board[row].length - 1 && !isFilled(board[row][col + 1]);
    }),
);

export const canFigureRotate = createSelector(
  [getBoard, getCurrentFigure],
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
      return !isFilled(board[row][col]);
    }),
);
