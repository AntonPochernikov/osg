import { createGrid } from 'utils/createGrid';
import { CONFIG } from './config';

const { grid: { rows, cols } } = CONFIG;

export const snakeGrid = createGrid(cols, rows);
