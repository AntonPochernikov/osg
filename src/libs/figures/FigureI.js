import { cons as consCell, getCoordinates } from '../cell.js';
import Figure from './Figure.js';
import readonly from '../decorators.js';

export default class FigureI extends Figure {
  static actions = {
    down: {
      direction: 'down',
      rotate: head => new FigureI(head, 'right'),
      getCells: (head) => {
        const result = [];
        const [headX, headY] = getCoordinates(head);
        for (let y = headY; y < headY + 4; y += 1) {
          result.push(consCell([headX, y], 'active'));
        }
        return result;
      },
      getSize: () => ({ height: 4, width: 1 }),
    },
    right: {
      direction: 'right',
      rotate: head => new FigureI(head, 'down'),
      getCells: (head) => {
        const result = [];
        const [headX, headY] = getCoordinates(head);
        for (let x = headX - 1; x < headX + 3; x += 1) {
          result.push(consCell([x, headY + 1], 'active'));
        }
        return result;
      },
      getSize: () => ({ height: 1, width: 4 }),
    },
  }

  @readonly
  type = 'I';

  getSize() {
    return FigureI.actions[this.direction].getSize();
  }

  getCells() {
    return FigureI.actions[this.direction].getCells(this.head);
  }

  rotate() {
    return FigureI.actions[this.direction].rotate(this.head);
  }

  setPosition(x, y) {
    return new FigureI(consCell([x, y], 'active'), this.direction);
  }

  move(x, y) {
    const [headX, headY] = getCoordinates(this.head);
    return new FigureI(consCell([headX + x, headY + y], 'active'), this.direction);
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
