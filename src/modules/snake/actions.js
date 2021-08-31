import { createAction } from 'redux-actions';

// GAME FLOW
export const startGame = createAction('SNAKE/GAME/START');
export const stopGame = createAction('SNAKE/GAME/STOP');
export const pauseGame = createAction('SNAKE/GAME/PAUSE');
export const resumeGame = createAction('SNAKE/GAME/RESUME');
export const finishGame = createAction('SNAKE/GAME/FINISH');

export const increaseGameSpeed = createAction('SNAKE/GAME/SPEED/INCREASE');
export const decreaseGameSpeed = createAction('SNAKE/GAME/SPEED/DECREASE');

// APPLE
export const spawnApple = createAction('SNAKE/APPLE/SPAWN');
export const eatApple = createAction('SNAKE/APPLE/EAT');

// SNAKE FLOW
export const spawnSnake = createAction('SNAKE/BODY/SPAWN');

export const moveSnake = createAction('SNAKE/BODY/MOVE');
export const checkSnakeMove = createAction('SNAKE/BODY/CHECK/MOVE');
