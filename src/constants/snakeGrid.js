import { createGrid } from 'libs/createGrid';
import { snakeConfig as config } from 'constants/config';

const { grid: { rows, cols } } = config;

export default createGrid(cols, rows);
