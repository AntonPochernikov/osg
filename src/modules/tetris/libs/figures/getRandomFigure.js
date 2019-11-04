import { keys, sample } from 'lodash';
import FigureI from './FigureI';
import FigureJ from './FigureJ';
import FigureL from './FigureL';
import FigureO from './FigureO';
import FigureS from './FigureS';
import FigureT from './FigureT';
import FigureZ from './FigureZ';

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

export default () => sample(figures)();
