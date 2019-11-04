// =============================
// CELL CONSRUCTOR AND SELECTORS
// =============================

// is cell predicate
export const isCell = cell => (typeof cell === 'object' && cell !== null && cell.isCell);

// check cell for selectors and operations
const checkCell = (cell) => {
  if (!isCell(cell)) {
    const value = typeof cell === 'object' ? JSON.stringify(cell, null, 2) : String(cell);
    throw new Error(`Argument must be cell, but it was '${value}'`);
  }
};
const checkCells = (...cells) => cells.forEach((c) => {
  checkCell(c);
});

// selector for coordinates array of cell
export const getCoordinates = (cell) => {
  checkCell(cell);
  return cell.coordinates;
};

// selector for horizontal coordinate of cell
export const getCol = cell => getCoordinates(cell)[0];

// selector vertical coordinate of cell
export const getRow = cell => getCoordinates(cell)[1];


// selector for cell id
export const getId = (cell) => {
  checkCell(cell);
  return getRow(cell) * 10 + getCol(cell);
};

// selector for cell state value
export const getState = (cell) => {
  checkCell(cell);
  return cell.state;
};

// selector for cell color color
export const getColor = (cell) => {
  checkCell(cell);
  return cell.color;
};

// selector for cell content
export const getContent = (cell) => {
  checkCell(cell);
  return cell.content;
};

// construct cell
export const cons = (coordinates, {
  state = 'empty',
  color = 'black',
  content = null,
} = {}) => {
  if (!Array.isArray(coordinates)) {
    const value = typeof coordinates === 'object'
      ? JSON.stringify(coordinates, null, 2)
      : String(coordinates);

    throw new Error(`First argument must be an array of coordinates but it was ${value}`);
  }

  const [col, row] = coordinates;
  if (!Number.isInteger(col) || !Number.isInteger(row)) {
    throw new Error(
      `Coordinates must be array of integers,
      but it was [${col} : ${typeof col}, ${row} : ${typeof row}]`,
    );
  }

  return {
    coordinates: [col, row],
    state,
    color,
    content,
    isCell: true,
  };
};

// =====================
// OPERATIONS WITH CELLS
// =====================

// is cell active predicate
export const isFilled = cell => getState(cell) === 'filled';

// check same coordinates operation
export const haveSameCoordinates = (c1, c2) => {
  checkCells(c1, c2);
  const [col1, row1] = getCoordinates(c1);
  const [col2, row2] = getCoordinates(c2);
  return col1 === col2 && row1 === row2;
};

// convert cell to string operation
export const toString = (cell) => {
  checkCell(cell);
  return `coorinates: [${getCol(cell)}, ${getRow(cell)}], ` +
    `state: ${getState(cell)}, color: ${getColor(cell)}, content: ${getContent(cell)}`;
};

// get cell moved down operation
export const moveDown = (cell) => {
  checkCell(cell);
  return cons([getCol(cell), getRow(cell) + 1], {
    state: getState(cell),
    color: getColor(cell),
    content: getContent(cell),
  });
};

export const moveTo = (cell, coordinates) => {
  checkCell(cell);
  return cons(coordinates, {
    state: getState(cell),
    color: getColor(cell),
    content: getContent(cell),
  });
};

export const setState = (cell, state) => {
  checkCell(cell);
  return cons(getCoordinates(cell), {
    state,
    color: getColor(cell),
    content: getContent(cell),
  });
};

// get cell painted with color operation
export const paint = (cell, color) => {
  checkCell(cell);
  return cons(getCoordinates(cell), {
    state: getState(cell),
    color,
    content: getContent(cell),
  });
};
