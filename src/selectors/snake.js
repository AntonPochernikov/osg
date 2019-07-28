import { createSelector } from 'reselect';
import {
  // getCoordinates,
  haveSameCoordinates,
  getState,
  // isFilled,
} from 'libs/cell.js';
// import times from 'libs/times.js';
import { createGrid } from 'libs/createGrid';
import { snakeConfig as config } from 'constants/config.js';

const { grid: { rows, cols } } = config;

export const getGameState = state => state.snake.gameState;
export const getApple = state => state.snake.apple;
export const getSpeed = state => state.snake.speed;
export const getSnake = state => state.snake.snake;

export const getGridCells = createSelector(
  [getApple, getSnake],
  (apple, snake) => {
    const grid = createGrid(cols, rows);
    if (snake && apple) {
      const snakeCells = snake.getCells();
      return grid.map(tr => tr.map((cell) => {
        const commonCell = snakeCells.find(c => haveSameCoordinates(c, cell));
        const appleCell = haveSameCoordinates(cell, apple);
        if (commonCell) {
          return getState(commonCell);
        }
        if (appleCell) {
          return getState(apple);
        }
        return getState(cell);
      }));
    }
    return grid.map(tr => tr.map(cell => getState(cell)));
  },
);
