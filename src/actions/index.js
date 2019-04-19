import { createAction } from 'redux-actions';

export const startTetrisGame = createAction('TETRIS/GAME/START');
export const stopTetrisGame = createAction('TETRIS/GAME/STOP');
export const pauseTetrisGame = createAction('TETRIS/GAME/PAUSE');
export const resumeTetrisGame = createAction('TETRIS/GAME/RESUME');
export const finishTetrisGame = createAction('TETRIS/GAME/FINISH');

export const setCurrentTetrisFigure = createAction('TETRIS/FIGURE/CURRENT/SET');
export const setNextTetrisFigure = createAction('TETRIS/FIGURE/NEXT/SET');

export const moveTetrisFigureDown = createAction('TETRIS/FIGURE/MOVE/DOWN');
export const fallTetrisFigureDown = createAction('TETRIS/FIGURE/FALL/DOWN');


export const loginUserRequest = createAction('USER/LOGIN/REQUEST');
export const loginUserSuccess = createAction('USER/LOGIN/SUCCESS');
export const loginUserFailure = createAction('USER/LOGIN/FAILURE');
export const loginUserCancel = createAction('USER/LOGIN/CANCEL');
export const logoutUser = createAction('USER/LOGOUT');
