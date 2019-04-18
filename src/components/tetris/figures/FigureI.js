import { create as createCell, getCol, getRow, getFill } from '../../../libs/cells.js';
import { Figure } from './Figure.js';

const directionActions = [
	{
		name: 'down',
		rotate: head => new FigureI(head, 'right'),
		getCells: (head) => {
			const result = [];
			const headX = getCol(head);
			const headY = getRow(head);
			for (let y = headY; y < headY + 4; y++) {
				result.push(createCell([headX, y]));
			}
			return result;
		},
	},
	{
		name: 'right',
		rotate: head => new FigureI(head, 'down'),
		getCells: (head) => {
			const result = [];
			const headX = head.getCol();
			const headY = head.getRow();
			for (let x = headX - 1; x < headX + 3; x++) {
				result.push(new Cell([x, headY + 1]));
			}
			return result;
		},
	},
];

const getActionByDirection = arg => directionActions.find(({ name }) => name === arg);

class FigureI extends Figure {
	getCells = () => getActionByDirection(this.direction).getCells(this.head)

	move = (x, y) => {
		const headX = this.head.getCol();
		const headY = this.head.getRow();
		return new FigureI(new Cell([headX + x, headY + y]), this.direction);
	}

	rotate = () => getActionByDirection(this.direction).rotate(this.head)
}

export default FigureI;
