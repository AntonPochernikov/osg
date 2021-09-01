import { getCoordinates, moveTo } from 'utils/cell';

import { CONFIG } from '../constants/config';

const { grid } = CONFIG;

const coordinatesByDirection = {
  up: ([col, row]) => ([
    col,
    row === 0 ? grid.rows - 1 : row - 1,
  ]),
  right: ([col, row]) => ([
    (col + 1) % grid.cols,
    row,
  ]),
  down: ([col, row]) => ([
    col,
    (row + 1) % grid.rows,
  ]),
  left: ([col, row]) => ([
    col === 0 ? grid.cols - 1 : col - 1,
    row,
  ]),
};

function generateNextCoordinates(coordinates, direction) {
  const getNext = coordinatesByDirection[direction];
  if (!getNext) {
    throw new Error(`Invalid direction - GENERATE_NEXT_COORDINATES: ${direction}`);
  }

  return getNext(coordinates);
}

export const generateNextCell = (cell, direction) => {
  const coordinates = getCoordinates(cell);

  return moveTo(cell, generateNextCoordinates(coordinates, direction));
};
