import { keys, sample } from 'lodash';

import {
  FigureI,
  FigureJ,
  FigureL,
  FigureO,
  FigureS,
  FigureT,
  FigureZ,
} from './figures';

const getRandomDirection = Figure => sample(keys(Figure.alignment));

const consFigure = Figure => () => {
  const dir = getRandomDirection(Figure);
  return new Figure(Figure.alignment[dir].startHead, dir);
};

const figures = [
  consFigure(FigureI),
  consFigure(FigureJ),
  consFigure(FigureL),
  consFigure(FigureO),
  consFigure(FigureS),
  consFigure(FigureT),
  consFigure(FigureZ),
];

export const getRandomFigure = () => sample(figures)();
