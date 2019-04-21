import { cons as consCell, getCoordinates } from '../cell.js';
import Figure from './Figure.js';
import readonly from '../decorators.js';

export default class FigureL extends Figure {
  static actions = {
    down: {
      direction: 'down',
      rotate: head => new FigureL(head, 'left'),
      getCells: (head) => {
        const result = [];
        const [headX, headY] = getCoordinates(head);
        result.push(consCell([headX + 1, headY], 'active'));
        result.push(consCell([headX - 1, headY + 1], 'active'));
        result.push(consCell([headX, headY + 1], 'active'));
        result.push(consCell([headX + 1, headY + 1], 'active'));
        return result;
      },
    },
    left: {
      direction: 'left',
      rotate: head => new FigureL(head, 'up'),
      getCells: (head) => {
        const result = [];
        const [headX, headY] = getCoordinates(head);
        result.push(consCell([headX, headY - 1], 'active'));
        result.push(consCell([headX, headY], 'active'));
        result.push(consCell([headX, headY + 1], 'active'));
        result.push(consCell([headX + 1, headY + 1], 'active'));
        return result;
      },
    },
    up: {
      direction: 'up',
      rotate: head => new FigureL(head, 'right'),
      getCells: (head) => {
        const result = [];
        const [headX, headY] = getCoordinates(head);
        result.push(consCell([headX - 1, headY + 1], 'active'));
        result.push(consCell([headX - 1, headY], 'active'));
        result.push(consCell([headX, headY], 'active'));
        result.push(consCell([headX + 1, headY], 'active'));
        return result;
      },
    },
    right: {
      direction: 'right',
      rotate: head => new FigureL(head, 'down'),
      getCells: (head) => {
        const result = [];
        const [headX, headY] = getCoordinates(head);
        result.push(consCell([headX + 1, headY - 1], 'active'));
        result.push(consCell([headX + 1, headY], 'active'));
        result.push(consCell([headX + 1, headY + 1], 'active'));
        result.push(consCell([headX, headY - 1], 'active'));
        return result;
      },
    },
  };

  @readonly
  type = 'L';

  getCells = () => FigureL.actions[this.direction].getCells(this.head)

  rotate = () => FigureL.actions[this.direction].rotate(this.head)

  move(x, y) {
    const [headX, headY] = getCoordinates(this.head);
    return new FigureL(consCell([headX + x, headY + y], 'active'), this.direction);
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
