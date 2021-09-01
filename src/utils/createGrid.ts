import { makeCell, CellType } from './cell/cell';

export const createClearRow = (columns: number, y: number): CellType[] => {
  return [...Array(columns)].map((_, x) => makeCell([x, y], { state: 'empty' }));
};

export const createIndeterminateRow = (columns: number, y: number) => {
  return [...Array(columns)].map((_, x) => makeCell([x, y], { state: 'indeterminate' }));
};

export const createGrid = (columns: number, rows: number) => {
  return [...Array(rows)].map((_, y) => createClearRow(columns, y));
};
