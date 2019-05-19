import { createAction } from 'redux-actions';

// GAME FLOW
export const startGame = createAction('TETRIS/GAME/START');
export const stopGame = createAction('TETRIS/GAME/STOP');
export const pauseGame = createAction('TETRIS/GAME/PAUSE');
export const resumeGame = createAction('TETRIS/GAME/RESUME');
export const finishGame = createAction('TETRIS/GAME/FINISH');

export const increaseGameSpeed = createAction('TETRIS/GAME/SPEED/INCREASE');
export const decreaseGameSpeed = createAction('TETRIS/GAME/SPEED/DECREASE');

// BOARD
export const selectCompletedRow = createAction('TETRIS/ROW/COMPLETED/SELECT');
export const removeCompletedRow = createAction('TETRIS/ROW/COMPLETED/REMOVE');

// FIGURES
export const setCurrentFigure = createAction('TETRIS/FIGURE/CURRENT/SET');
export const setNextFigure = createAction('TETRIS/FIGURE/NEXT/SET');

// FIGURE FLOW
export const fallFigureDown = createAction('TETRIS/FIGURE/FALL/DOWN');
export const collideFigure = createAction('TETRIS/FIGURE/COLLIDE');

export const tryFigureDown = createAction('TETRIS/FIGURE/TRY/DOWN');
export const moveFigureDown = createAction('TETRIS/FIGURE/MOVE/DOWN');

export const tryFigureLeft = createAction('TETRIS/FIGURE/TRY/LEFT');
export const moveFigureLeft = createAction('TETRIS/FIGURE/MOVE/LEFT');

export const tryFigureRight = createAction('TETRIS/FIGURE/TRY/RIGHT');
export const moveFigureRight = createAction('TETRIS/FIGURE/MOVE/RIGHT');

export const tryRotateFigure = createAction('TETRIS/FIGURE/TRY/ROTATE');
export const rotateFigure = createAction('TETRIS/FIGURE/ROTATE');
