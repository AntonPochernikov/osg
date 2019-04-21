// is cell predicate
export const isCell = cell => (typeof cell === 'object' && cell.isCell);
// check cell for selectors
const checkCell = (cell) => {
  if (!isCell(cell)) {
    const value = typeof cell === 'object' ? JSON.stringify(cell, null, 2) : String(cell);
    throw new Error(`Argument must be cell, but it was '${value}'`);
  }
};
// get coordinates array of cell
export const getCoordinates = (cell) => {
  checkCell(cell);
  return cell.coordinates;
};
// get horizontal coordinate of cell
export const getCol = cell => getCoordinates(cell)[0];
// get vertical coordinate of cell
export const getRow = cell => getCoordinates(cell)[1];
// check same coordinates
export const haveSameCoordinates = (c1, c2) => {
  checkCell(c1);
  checkCell(c2);
  const col1 = getCol(c1);
  const col2 = getCol(c2);
  const row1 = getRow(c1);
  const row2 = getRow(c2);
  return col1 === col2 && row1 === row2;
};
// get cell id
export const getId = (cell) => {
  checkCell(cell);
  return getRow(cell) * 10 + getCol(cell);
};
// get cell state value
export const getState = (cell) => {
  checkCell(cell);
  return cell.state;
};
// is cell active
export const isActive = cell => getState(cell) === 'active';
// get cell fill color
export const getFill = (cell) => {
  checkCell(cell);
  return cell.fill;
};
// convert cell to string
export const toString = (cell) => {
  checkCell(cell);
  return `coorinates: [${getCol(cell)}, ${getRow(cell)}], state: ${getState(cell)}, fill: ${getFill(cell)}`;
};
// build cell
export const cons = ([col, row], state = 'inactive', fill = 'black') => {
  const cell = {
    coordinates: [col, row],
    state,
    fill,
    isCell: true,
  };
  return cell;
};
// get active cell from cell
export const getActive = cell => cons(
  getCoordinates(cell),
  'active',
  getFill(cell),
);
// get inactive cell from cell
export const getInactive = cell => cons(
  getCoordinates(cell),
  'inactive',
  getFill(cell),
);
// fill cell with color
// export const fill = (cell, color) => cons(

// );
