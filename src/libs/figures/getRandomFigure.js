import _ from 'lodash';
import FigureI from './FigureI.js';
import FigureJ from './FigureJ.js';
import FigureL from './FigureL.js';
import FigureO from './FigureO.js';
import FigureS from './FigureS.js';
import FigureT from './FigureT.js';
import FigureZ from './FigureZ.js';

const getRandomDirection = Figure => _(Figure.alignment)
  .keys()
  .sample();

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

export default () => _.sample(figures)();
