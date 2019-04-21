import FigureI from './FigureI.js';
import FigureJ from './FigureJ.js';
import FigureL from './FigureL.js';
import FigureO from './FigureO.js';
import FigureS from './FigureS.js';
import FigureT from './FigureT.js';
import FigureZ from './FigureZ.js';

const figures = [
  head => new FigureI(head),
  head => new FigureJ(head),
  head => new FigureL(head),
  head => new FigureO(head),
  head => new FigureS(head),
  head => new FigureT(head),
  head => new FigureZ(head),
];

export default (head) => {
  const randomIndex = Math.floor(Math.random() * figures.length);
  const consFigure = figures[randomIndex];
  return consFigure(head);
};
