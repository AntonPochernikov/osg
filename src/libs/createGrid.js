import { cons as consCell } from './cell.js';

export const createClearRow = (columns, y) => {
  return [...Array(columns).keys()].map(x => consCell([x, y], 'empty'));
};

export const createIndeterminateRow = (columns, y) => {
  return [...Array(columns).keys()].map(x => consCell([x, y], 'indeterminate'));
};

export const createGrid = (columns, rows) => {
  return [...Array(rows).keys()].map(y => createClearRow(columns, y));
};
