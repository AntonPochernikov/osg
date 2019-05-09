import { cons as consCell, getCoordinates } from 'libs/cell.js';
import readonly from 'libs/decorators.js';
import Figure from './Figure.js';

export default class FigureT extends Figure {
  static actions = {
    down: {
      direction: 'down',
      rotate: head => new FigureT(head, 'left'),
      getCells: (head) => {
        const result = [];
        const [headX, headY] = getCoordinates(head);
        result.push(consCell([headX, headY], 'active'));
        result.push(consCell([headX - 1, headY + 1], 'active'));
        result.push(consCell([headX, headY + 1], 'active'));
        result.push(consCell([headX + 1, headY + 1], 'active'));
        return result;
      },
      getSize: () => ({ height: 2, width: 3 }),
    },
    left: {
      direction: 'left',
      rotate: head => new FigureT(head, 'up'),
      getCells: (head) => {
        const result = [];
        const [headX, headY] = getCoordinates(head);
        result.push(consCell([headX, headY], 'active'));
        result.push(consCell([headX, headY + 1], 'active'));
        result.push(consCell([headX, headY + 2], 'active'));
        result.push(consCell([headX + 1, headY + 1], 'active'));
        return result;
      },
      getSize: () => ({ height: 3, width: 2 }),
    },
    up: {
      direction: 'up',
      rotate: head => new FigureT(head, 'right'),
      getCells: (head) => {
        const result = [];
        const [headX, headY] = getCoordinates(head);
        result.push(consCell([headX, headY + 2], 'active'));
        result.push(consCell([headX - 1, headY + 1], 'active'));
        result.push(consCell([headX, headY + 1], 'active'));
        result.push(consCell([headX + 1, headY + 1], 'active'));
        return result;
      },
      getSize: () => ({ height: 2, width: 3 }),
    },
    right: {
      direction: 'right',
      rotate: head => new FigureT(head, 'down'),
      getCells: (head) => {
        const result = [];
        const [headX, headY] = getCoordinates(head);
        result.push(consCell([headX, headY], 'active'));
        result.push(consCell([headX, headY + 1], 'active'));
        result.push(consCell([headX, headY + 2], 'active'));
        result.push(consCell([headX - 1, headY + 1], 'active'));
        return result;
      },
      getSize: () => ({ height: 3, width: 2 }),
    },
  };

  @readonly
  type = 'T';

  getSize() {
    return FigureT.actions[this.direction].getSize();
  }

  getCells() {
    return FigureT.actions[this.direction].getCells(this.head);
  }

  rotate() {
    return FigureT.actions[this.direction].rotate(this.head);
  }

  setPosition(x, y) {
    return new FigureT(consCell([x, y], 'active'), this.direction);
  }

  move(x, y) {
    const [headX, headY] = getCoordinates(this.head);
    return new FigureT(consCell([headX + x, headY + y], 'active'), this.direction);
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
