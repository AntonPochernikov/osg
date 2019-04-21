import { createAction } from 'redux-actions';

// GAME FLOW
export const startTetrisGame = createAction('TETRIS/GAME/START');
export const stopTetrisGame = createAction('TETRIS/GAME/STOP');
export const pauseTetrisGame = createAction('TETRIS/GAME/PAUSE');
export const resumeTetrisGame = createAction('TETRIS/GAME/RESUME');
export const finishTetrisGame = createAction('TETRIS/GAME/FINISH');

// FIGURES
export const setCurrentTetrisFigure = createAction('TETRIS/FIGURE/CURRENT/SET');
export const setNextTetrisFigure = createAction('TETRIS/FIGURE/NEXT/SET');

// FIGURE FLOW
export const fallTetrisFigureDown = createAction('TETRIS/FIGURE/FALL/DOWN');
export const collideTetrisFigure = createAction('TETRIS/FIGURE/COLLIDE');

export const tryTetrisFigureDown = createAction('TETRIS/FIGURE/TRY/DOWN');
export const moveTetrisFigureDown = createAction('TETRIS/FIGURE/MOVE/DOWN');

export const tryTetrisFigureLeft = createAction('TETRIS/FIGURE/TRY/LEFT');
export const moveTetrisFigureLeft = createAction('TETRIS/FIGURE/MOVE/LEFT');

export const tryTetrisFigureRight = createAction('TETRIS/FIGURE/TRY/RIGHT');
export const moveTetrisFigureRight = createAction('TETRIS/FIGURE/MOVE/RIGHT');

export const tryRotateTetrisFigure = createAction('TETRIS/FIGURE/TRY/ROTATE');
export const rotateTetrisFigure = createAction('TETRIS/FIGURE/ROTATE');
