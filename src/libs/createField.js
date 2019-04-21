import { cons as consCell } from './cell.js';

export const createClearRow = (columns, y) => {
  const row = [];
  for (let x = 0; x < columns; x += 1) {
    row.push(consCell([x, y], 'inactive'));
  }
  return row;
};

export const createIndeterminateRow = (columns, y) => {
  const row = [];
  for (let x = 0; x < columns; x += 1) {
    row.push(consCell([x, y], 'indeterminate'));
  }
  return row;
};

export const createField = (columns, rows) => {
  const field = [];
  for (let y = 0; y < rows; y += 1) {
    field.push(createClearRow(columns, y));
  }
  return field;
};
