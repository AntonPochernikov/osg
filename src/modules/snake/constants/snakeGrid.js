import { createGrid } from 'libs/createGrid';
import config from './config';

const { grid: { rows, cols } } = config;

export default createGrid(cols, rows);
