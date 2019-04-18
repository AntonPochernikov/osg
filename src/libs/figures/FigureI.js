import { create as createCell, getCol, getRow, getFill } from '../../../libs/cells.js';
import { Figure } from './Figure.js';

const actions = {
  down: {
    direction: 'down',
    rotate: head => new FigureI(head, 'right'),
    getCells: (head) => {
      const result = [];
      const headX = getCol(head);
      const headY = getRow(head);
      for (let y = headY; y < headY + 4; y++) {
        result.push(createCell([headX, y], 'active'));
      }
      return result;
    },
  },
  right: {
    direction: 'right',
    rotate: head => new FigureI(head, 'down'),
    getCells: (head) => {
      const result = [];
      const headX = getCol(head);
      const headY = getRow(head);
      for (let x = headX - 1; x < headX + 3; x++) {
        result.push(createCell([x, headY + 1], 'active'));
      }
      return result;
    },
  },
};

const getActions = dir => actions[dir];

export default class FigureI extends Figure {
  getCells = () => actions[this.direction].getCells(this.head)

  rotate = () => actions[this.direction].rotate(this.head)
}
