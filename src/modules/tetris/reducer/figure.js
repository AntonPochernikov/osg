import { handleActions } from 'redux-actions';

import * as action from 'modules/main/actions';

import { getRandomFigure } from '../libs/getRandomFigure';

const figureInit = {
  current: null,
  next: null,
};

export default handleActions({
  [action.tetris.setCurrentFigure]: state => ({
    ...state,
    current: state.next || getRandomFigure(),
  }),
  [action.tetris.setNextFigure]: state => ({
    ...state,
    next: getRandomFigure(),
  }),
  [action.tetris.collideFigure]: state => ({
    ...state,
    current: null,
  }),
  [action.tetris.moveFigureDown]: state => ({
    ...state,
    current: state.current.moveDown(),
  }),
  [action.tetris.moveFigureLeft]: state => ({
    ...state,
    current: state.current.moveLeft(),
  }),
  [action.tetris.moveFigureRight]: state => ({
    ...state,
    current: state.current.moveRight(),
  }),
  [action.tetris.rotateFigure]: state => ({
    ...state,
    current: state.current.rotate(),
  }),
  [action.tetris.fallFigureDown]: state => ({
    ...state,
    current: state.current.moveDown(),
  }),
  [action.tetris.stopGame]: () => figureInit,
}, figureInit);
