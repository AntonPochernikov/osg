import { createSelector } from 'reselect';

import {
  haveSameCoordinates,
  getState,
  getColor,
} from 'utils/cell';
import { times } from 'utils/times';

import { CONFIG } from './constants/config';
import { snakeGrid } from './constants/snakeGrid';
import { generateNextCell } from './libs/generateNextCell';

export const snake = state => state.snake;
export const getGameState = createSelector(snake, snake => snake.gameState);
export const getApple = createSelector(snake, snake => snake.apple);
export const getSpeed = createSelector(snake, snake => snake.speed);
export const getBody = createSelector(snake, snake => snake.body);
export const getDirection = createSelector(snake, snake => snake.direction);

export const getGridCells = createSelector(
  [getApple, getBody],
  (apple, snake) => {
    if (snake) {
      const snakeCells = snake.getCells();
      return snakeGrid.map(tr => tr.map((cell) => {
        const commonCell = snakeCells.find(c => haveSameCoordinates(c, cell));
        const isAppleCell = apple && haveSameCoordinates(cell, apple);
        if (commonCell) {
          return {
            state: getState(commonCell),
            color: getColor(commonCell),
          };
        }
        if (isAppleCell) {
          return {
            state: getState(apple),
            color: getColor(apple),
          };
        }
        return { state: getState(cell) };
      }));
    }

    return snakeGrid.map(tr => tr.map(cell => ({ state: getState(cell) })));
  },
);

const { speed: { modificator }, interval } = CONFIG;
export const getIncrementInterval = createSelector(
  getSpeed,
  // increase speed for 30% every time we add speed
  speed => times(x => modificator * x, speed - 1)(interval),
);

export const isSnakeColliding = createSelector(
  getBody,
  snake => snake.isColliding(),
);

export const doesSnakeEatApple = createSelector(
  [getBody, getApple, getDirection],
  (snake, apple, direction) => snake
    .move(generateNextCell(snake.getHead(), direction))
    .getCells()
    .some(c => haveSameCoordinates(c, apple)),
);
