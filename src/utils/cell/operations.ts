import {
  CellType,
  CoordinatesType,
  checkCell,
  checkCells,
  makeCell,
  getCol,
  getColor,
  getContent,
  getCoordinates,
  getRow,
  getState,
} from './cell';

export const isFilled = (cell: CellType) => getState(cell) === 'filled';

export const haveSameCoordinates = (c1: CellType, c2: CellType) => {
  checkCells(c1, c2);
  const [col1, row1] = getCoordinates(c1);
  const [col2, row2] = getCoordinates(c2);
  return col1 === col2 && row1 === row2;
};

export const toString = (cell: CellType) => {
  checkCell(cell);
  return `coordinates: [${getCol(cell)}, ${getRow(cell)}], ` +
    `state: ${getState(cell)}, color: ${getColor(cell)}, content: ${getContent(cell)}`;
};

export const moveDown = (cell: CellType) => {
  checkCell(cell);
  return makeCell([getCol(cell), getRow(cell) + 1], {
    state: getState(cell),
    color: getColor(cell),
    content: getContent(cell),
  });
};

export const moveTo = (cell: CellType, coordinates: CoordinatesType) => {
  checkCell(cell);
  return makeCell(coordinates, {
    state: getState(cell),
    color: getColor(cell),
    content: getContent(cell),
  });
};

export const setState = (cell: CellType, state: string) => {
  checkCell(cell);
  return makeCell(getCoordinates(cell), {
    state,
    color: getColor(cell),
    content: getContent(cell),
  });
};

export const paint = (cell: CellType, color: string) => {
  checkCell(cell);
  return makeCell(getCoordinates(cell), {
    state: getState(cell),
    color,
    content: getContent(cell),
  });
};
