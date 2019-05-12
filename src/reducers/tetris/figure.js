import { handleActions } from 'redux-actions';
import * as action from 'actions';
import getRandomFigure from 'libs/figures/getRandomFigure.js';

const figureInit = {
  current: null,
  next: null,
};

export default handleActions({
  [action.setCurrentTetrisFigure]: state => ({
    ...state,
    current: state.next || getRandomFigure(),
  }),
  [action.setNextTetrisFigure]: state => ({
    ...state,
    next: getRandomFigure(),
  }),
  [action.collideTetrisFigure]: state => ({
    ...state,
    current: null,
  }),
  [action.moveTetrisFigureDown]: state => ({
    ...state,
    current: state.current.moveDown(),
  }),
  [action.moveTetrisFigureLeft]: state => ({
    ...state,
    current: state.current.moveLeft(),
  }),
  [action.moveTetrisFigureRight]: state => ({
    ...state,
    current: state.current.moveRight(),
  }),
  [action.rotateTetrisFigure]: state => ({
    ...state,
    current: state.current.rotate(),
  }),
  [action.fallTetrisFigureDown]: state => ({
    ...state,
    current: state.current.moveDown(),
  }),
  [action.stopTetrisGame]: () => figureInit,
}, figureInit);
