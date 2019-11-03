import { createSelector } from 'reselect';
import { createGrid } from 'libs/createGrid';
import {
  getCoordinates,
  haveSameCoordinates,
  getState,
  isFilled,
} from 'libs/cell';
import times from 'libs/times';
import { tetrisConfig } from 'constants/config';

export const getGrid = state => state.tetris.grid;
export const getCurrentFigure = state => state.tetris.figure.current;
export const getNextFigure = state => state.tetris.figure.next;
export const getSpeed = state => state.tetris.speed;
export const getScore = state => state.tetris.score;
export const getGameState = state => state.tetris.gameState;

// add current figure on grid
export const getGridCells = createSelector(
  [getGrid, getCurrentFigure],
  (grid, figure) => {
    if (figure) {
      const figureCells = figure.getCells();
      return grid.map(tr => tr.map((cell) => {
        const commonCell = figureCells.find(c => haveSameCoordinates(c, cell));
        if (commonCell) {
          return getState(commonCell);
        }
        return getState(cell);
      }));
    }
    return grid.map(tr => tr.map(getState));
  },
);

export const nextFigureGrid = createSelector(
  getNextFigure,
  (figure) => {
    if (!figure) {
      return [];
    }
    const { height, width } = figure.getSize();
    const gridW = width + 2;
    const gridH = height + 2;
    const grid = createGrid(gridW, gridH);
    const figureCells = figure.setPosition(Math.floor(gridW / 2), 1).getCells();
    return grid.map(tr => tr.map((cell) => {
      const commonCell = figureCells.find(c => haveSameCoordinates(c, cell));
      if (commonCell) {
        return getState(commonCell);
      }
      return getState(cell);
    }));
  },
);

export const getCompletedRows = createSelector(
  getGrid,
  grid => grid.reduce((acc, row, i) => {
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
  [getGrid, getCurrentFigure],
  (grid, figure) => figure && figure
    .getCells()
    .every((cell) => {
      const [col, row] = getCoordinates(cell);
      return row !== grid.length - 1 && !isFilled(grid[row + 1][col]);
    }),
);

export const canFigureMoveLeft = createSelector(
  [getGrid, getCurrentFigure],
  (grid, figure) => figure && figure
    .getCells()
    .every((cell) => {
      const [col, row] = getCoordinates(cell);
      return col !== 0 && !isFilled(grid[row][col - 1]);
    }),
);

export const canFigureMoveRight = createSelector(
  [getGrid, getCurrentFigure],
  (grid, figure) => figure && figure
    .getCells()
    .every((cell) => {
      const [col, row] = getCoordinates(cell);
      return col !== grid[row].length - 1 && !isFilled(grid[row][col + 1]);
    }),
);

export const canFigureRotate = createSelector(
  [getGrid, getCurrentFigure],
  (grid, figure) => figure && figure
    .rotate()
    .getCells()
    .every((cell) => {
      const [col, row] = getCoordinates(cell);
      // outside top or bottom
      if (row < 0 || row > grid.length - 1) {
        return false;
      }
      // outside left or right
      if (col < 0 || col > grid[row].length - 1) {
        return false;
      }
      // will collide with active grid cells
      return !isFilled(grid[row][col]);
    }),
);
