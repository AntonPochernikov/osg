// is cell predicate
export const isCell = cell => (typeof cell === 'object' && cell.isCell);
// check cell
const checkCell = (cell) => {
  if (!isCell(cell)) {
    const value = typeof cell === 'object' ? JSON.stringify(cell, null, 2) : String(cell);
    throw new Error(`Argument must be cell, but it was '${value}'`);
  }
};
// get horizontal coordinate of cell
export const getCol = (cell) => {
  checkCell(cell);
  return cell.coordinates.col;
};
// get vertical coordinate of cell
export const getRow = (cell) => {
  checkCell(cell);
  return cell.coordinates.row;
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
export const create = ([col, row], state = 'inactive', fill = 'black') => {
  const cell = {
    coordinates: [col, row],
    state,
    fill,
    isCell: true,
  };
  return cell;
};
// get active cell from cell
export const getActive = cell => create(
  [getCol(cell), getRow(cell)],
  'active',
  getFill(cell),
);
// get inactive cell from cell
export const getInactive = cell => create(
  [getCol(cell), getRow(cell)],
  'inactive',
  getFill(cell),
);
