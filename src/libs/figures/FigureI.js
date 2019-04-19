import { create as createCell, getCol, getRow } from '../cells.js';
import Figure from './Figure.js';

export default class FigureI extends Figure {
  actions = {
    down: {
      direction: 'down',
      rotate: head => new FigureI(head, 'right'),
      getCells: (head) => {
        const result = [];
        const headX = getCol(head);
        const headY = getRow(head);
        for (let y = headY; y < headY + 4; y += 1) {
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
        for (let x = headX - 1; x < headX + 3; x += 1) {
          result.push(createCell([x, headY + 1], 'active'));
        }
        return result;
      },
    },
  }

  getCells = () => this.actions[this.direction].getCells(this.head)

  rotate = () => this.actions[this.direction].rotate(this.head)

  move(x, y) {
    const headX = getCol(this.head);
    const headY = getRow(this.head);
    return new FigureI(createCell([headX + x, headY + y], 'active'), this.direction);
  }

  moveDown() {
    return this.move(0, 1);
  }

  moveLeft() {
    return this.move(-1, 0);
  }

  moveRight() {
    return this.move(1, 0);
  }
}
