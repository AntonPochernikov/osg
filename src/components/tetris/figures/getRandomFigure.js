import FigureI from '../figures/FigureI.js';
import FigureO from '../figures/FigureO.js';
import FigureT from '../figures/FigureT.js';
import FigureL from '../figures/FigureL.js';
import FigureJ from '../figures/FigureJ.js';
import FigureS from '../figures/FigureS.js';
import FigureZ from '../figures/FigureZ.js';

const figuresArray = [
	head => new FigureI(head),
	head => new FigureO(head),
	head => new FigureT(head),
	head => new FigureL(head),
	head => new FigureJ(head),
	head => new FigureS(head),
	head => new FigureZ(head)
];

export default (head) => {
	const randomIndex = Math.floor(Math.random() * (figuresArray.length));
	const createFigure = figuresArray[randomIndex];
	return createFigure(head);
};
