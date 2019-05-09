import { cons as consCell, getCoordinates } from 'libs/cell.js';
import readonly from 'libs/decorators.js';
import Figure from './Figure.js';

export default class FigureJ extends Figure {
  static actions = {
    down: {
      direction: 'down',
      rotate: head => new FigureJ(head, 'left'),
      getCells: (head) => {
        const result = [];
        const [headX, headY] = getCoordinates(head);
        result.push(consCell([headX - 1, headY], 'active'));
        result.push(consCell([headX - 1, headY + 1], 'active'));
        result.push(consCell([headX, headY + 1], 'active'));
        result.push(consCell([headX + 1, headY + 1], 'active'));
        return result;
      },
      getSize: () => ({ height: 2, width: 3 }),
    },
    left: {
      direction: 'left',
      rotate: head => new FigureJ(head, 'up'),
      getCells: (head) => {
        const result = [];
        const [headX, headY] = getCoordinates(head);
        result.push(consCell([headX, headY - 1], 'active'));
        result.push(consCell([headX, headY], 'active'));
        result.push(consCell([headX, headY + 1], 'active'));
        result.push(consCell([headX + 1, headY - 1], 'active'));
        return result;
      },
      getSize: () => ({ height: 3, width: 2 }),
    },
    up: {
      direction: 'up',
      rotate: head => new FigureJ(head, 'right'),
      getCells: (head) => {
        const result = [];
        const [headX, headY] = getCoordinates(head);
        result.push(consCell([headX + 1, headY + 1], 'active'));
        result.push(consCell([headX - 1, headY], 'active'));
        result.push(consCell([headX, headY], 'active'));
        result.push(consCell([headX + 1, headY], 'active'));
        return result;
      },
      getSize: () => ({ height: 2, width: 3 }),
    },
    right: {
      direction: 'right',
      rotate: head => new FigureJ(head, 'down'),
      getCells: (head) => {
        const result = [];
        const [headX, headY] = getCoordinates(head);
        result.push(consCell([headX + 1, headY - 1], 'active'));
        result.push(consCell([headX + 1, headY], 'active'));
        result.push(consCell([headX + 1, headY + 1], 'active'));
        result.push(consCell([headX, headY + 1], 'active'));
        return result;
      },
      getSize: () => ({ height: 3, width: 2 }),
    },
  };

  @readonly
  type = 'J';

  getSize() {
    return FigureJ.actions[this.direction].getSize();
  }

  getCells() {
    return FigureJ.actions[this.direction].getCells(this.head);
  }

  rotate() {
    return FigureJ.actions[this.direction].rotate(this.head);
  }

  setPosition(x, y) {
    return new FigureJ(consCell([x, y], 'active'), this.direction);
  }

  move(x, y) {
    const [headX, headY] = getCoordinates(this.head);
    return new FigureJ(consCell([headX + x, headY + y], 'active'), this.direction);
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
