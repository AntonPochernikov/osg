import { cons as consCell, getCoordinates } from 'libs/cell.js';
import readonly from 'libs/decorators.js';
import Figure from './Figure.js';

export default class FigureI extends Figure {
  static alignment = {
    down: {
      direction: 'down',
      startHead: consCell([5, 0], 'active'),
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
      startHead: consCell([5, 0], 'active'),
      rotate: head => new FigureI(head, 'down'),
      getCells: (head) => {
        const result = [];
        const [headX, headY] = getCoordinates(head);
        for (let x = headX - 2; x < headX + 2; x += 1) {
          result.push(consCell([x, headY], 'active'));
        }
        return result;
      },
      getSize: () => ({ height: 1, width: 4 }),
    },
  }

  @readonly
  type = 'I';

  getSize() {
    return FigureI.alignment[this.direction].getSize();
  }

  getCells() {
    return FigureI.alignment[this.direction].getCells(this.head);
  }

  rotate() {
    return FigureI.alignment[this.direction].rotate(this.head);
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
