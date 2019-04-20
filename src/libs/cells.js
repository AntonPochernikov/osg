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
  return cell.coordinates[0];
};
// get vertical coordinate of cell
export const getRow = (cell) => {
  checkCell(cell);
  return cell.coordinates[1];
};
// get coordinates array
export const getCoordinates = (cell) => {
  checkCell(cell);
  return cell.coordinates;
};
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
// isActive predicate
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
