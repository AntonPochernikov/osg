import FigureI from './FigureI.js';

const figures = [
  head => new FigureI(head),
];

export default (head) => {
  const randomIndex = Math.floor(Math.random() * figures.length);
  const createFigure = figures[randomIndex];
  return createFigure(head);
};
