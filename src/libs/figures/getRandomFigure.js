import FigureI from './FigureI.js';
import FigureJ from './FigureJ.js';

const figures = [
  head => new FigureI(head),
  head => new FigureJ(head),
];

export default (head) => {
  const randomIndex = Math.floor(Math.random() * figures.length);
  const consFigure = figures[randomIndex];
  return consFigure(head);
};
