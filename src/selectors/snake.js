import { createSelector } from 'reselect';
import {
  // getCoordinates,
  haveSameCoordinates,
  getState,
  // isFilled,
} from 'libs/cell';
import times from 'libs/times';
import { snakeConfig as config } from 'constants/config';
import grid from 'constants/snakeGrid';
import generateNextCell from 'libs/generateNextCell';

export const getGameState = state => state.snake.gameState;
export const getApple = state => state.snake.apple;
export const getSpeed = state => state.snake.speed;
export const getBody = state => state.snake.body;
export const getDirection = state => state.snake.direction;

export const getGridCells = createSelector(
  [getApple, getBody],
  (apple, snake) => {
    if (snake) {
      const snakeCells = snake.getCells();
      return grid.map(tr => tr.map((cell) => {
        const commonCell = snakeCells.find(c => haveSameCoordinates(c, cell));
        const isAppleCell = apple && haveSameCoordinates(cell, apple);
        if (commonCell) {
          return getState(commonCell);
        }
        if (isAppleCell) {
          return getState(apple);
        }
        return getState(cell);
      }));
    }
    return grid.map(tr => tr.map(getState));
  },
);

const { speed: { modificator }, interval } = config;
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
