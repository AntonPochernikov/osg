import { createSelector } from 'reselect';
import {
  getCoordinates,
  haveSameCoordinates,
  getState,
  isFilled,
} from 'libs/cell.js';
import times from 'libs/times.js';
import { snakeConfig as config } from 'constants/config.js';

const { grid: { rows, cols } } = config;

export const getGameState = state => state.snake.gameState;
export const getApple = state => state.snake.apple;
export const getSpeed = state => state.snake.speed;
export const getSnake = state => state.snake.snake;

export const getGridCells = createSelector(
  getApple,
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
    return grid.map(tr => tr.map(cell => getState(cell)));
  },
);
