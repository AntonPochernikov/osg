import Cell from '../../libs/cells/Cell.js';
import { Figure } from './Figures.js';

const directionActions = [
	{
		name: 'down',
		rotate: head => new FigureL(head, 'left'),
		getCells: (head) => {
			const result = [];
			const headX = head.getCol();
			const headY = head.getRow();
			result.push(new Cell([headX + 1, headY]));
			result.push(new Cell([headX - 1, headY + 1]));
			result.push(new Cell([headX, headY + 1]));
			result.push(new Cell([headX + 1, headY + 1]));
			return result;
		},
	},
	{
		name: 'left',
		rotate: head => new FigureL(head, 'up'),
		getCells: (head) => {
			const result = [];
			const headX = head.getCol();
			const headY = head.getRow();
			result.push(new Cell([headX, headY - 1]));
			result.push(new Cell([headX, headY]));
			result.push(new Cell([headX, headY + 1]));
			result.push(new Cell([headX + 1, headY + 1]));
			return result;
		},
	},
	{
		name: 'up',
		rotate: head => new FigureL(head, 'right'),
		getCells: (head) => {
			const result = [];
			const headX = head.getCol();
			const headY = head.getRow();
			result.push(new Cell([headX - 1, headY + 1]));
			result.push(new Cell([headX - 1, headY]));
			result.push(new Cell([headX, headY]));
			result.push(new Cell([headX + 1, headY]));
			return result;
		},
	},
	{
		name: 'right',
		rotate: head => new FigureL(head, 'down'),
		getCells: (head) => {
			const result = [];
			const headX = head.getCol();
			const headY = head.getRow();
			result.push(new Cell([headX + 1, headY - 1]));
			result.push(new Cell([headX + 1, headY]));
			result.push(new Cell([headX + 1, headY + 1]));
			result.push(new Cell([headX, headY - 1]));
			return result;
		},
	},
];

const getActionByDirection = arg => directionActions.find(({ name }) => name === arg);

class FigureL extends Figure {
	getCells = () => getActionByDirection(this.direction).getCells(this.head)

	move = (x, y) => {
		const headX = this.head.getCol();
		const headY = this.head.getRow();
		return new FigureL(new Cell([headX + x, headY + y]), this.direction);
	}

	rotate = () => getActionByDirection(this.direction).rotate(this.head)
}

export default FigureL;
