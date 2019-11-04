import sample from 'lodash/sample';
import { haveSameCoordinates, setState } from 'libs/cell';
import grid from 'constants/snakeGrid';

const flattenGrid = grid.reduce((acc, row) => acc.concat(row), []);

export default (snake) => {
  const snakeCells = snake.getCells();
  const filtered = flattenGrid
    .filter(c1 => !snakeCells.some(c2 => haveSameCoordinates(c1, c2)));

  const randomCell = sample(filtered);
  return setState(randomCell, 'filled');
};
