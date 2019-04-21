import { cons as consCell, getCoordinates } from '../cell.js';
import Figure from './Figure.js';
import readonly from '../decorators.js';

export default class FigureS extends Figure {
  static actions = {
    down: {
      direction: 'down',
      rotate: head => new FigureS(head, 'left'),
      getCells: (head) => {
        const result = [];
        const [headX, headY] = getCoordinates(head);
        result.push(consCell([headX, headY], 'active'));
        result.push(consCell([headX - 1, headY + 1], 'active'));
        result.push(consCell([headX, headY + 1], 'active'));
        result.push(consCell([headX + 1, headY], 'active'));
        return result;
      },
      getSize: () => ({ height: 2, width: 3 }),
    },
    left: {
      direction: 'left',
      rotate: head => new FigureS(head, 'down'),
      getCells: (head) => {
        const result = [];
        const [headX, headY] = getCoordinates(head);
        result.push(consCell([headX, headY - 1], 'active'));
        result.push(consCell([headX, headY], 'active'));
        result.push(consCell([headX + 1, headY], 'active'));
        result.push(consCell([headX + 1, headY + 1], 'active'));
        return result;
      },
      getSize: () => ({ height: 3, width: 2 }),
    },
  };

  @readonly
  type = 'S';

  getSize() {
    return FigureS.actions[this.direction].getSize();
  }

  getCells() {
    return FigureS.actions[this.direction].getCells(this.head);
  }

  rotate() {
    return FigureS.actions[this.direction].rotate(this.head);
  }

  setPosition(x, y) {
    return new FigureS(consCell([x, y], 'active'), this.direction);
  }

  move(x, y) {
    const [headX, headY] = getCoordinates(this.head);
    return new FigureS(consCell([headX + x, headY + y], 'active'), this.direction);
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
