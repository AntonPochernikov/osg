import { createAction } from 'redux-actions';

export const startTetrisGame = createAction('TETRIS/GAME/START');
export const stopTetrisGame = createAction('TETRIS/GAME/STOP');
export const pauseTetrisGame = createAction('TETRIS/GAME/PAUSE');
export const resumeTetrisGame = createAction('TETRIS/GAME/RESUME');
export const finishTetrisGame = createAction('TETRIS/GAME/FINISH');

export const moveTetrisFigureDown = createAction('TETRIS/FIGURE/MOVE/DOWN');

export const setCurrentTetrisFigure = createAction('TETRIS/FIGURE/CURRENT/SET');
export const setNextTetrisFigure = createAction('TETRIS/FIGURE/NEXT/SET');
