import { cons as consCell, getCoordinates } from 'libs/cell.js';
import readonly from 'libs/decorators.js';
import Figure from './Figure.js';

export default class FigureO extends Figure {
  static alignment = {
    normal: {
      direction: 'normal',
      startHead: consCell([5, 0], 'active'),
      getCells: (head) => {
        const result = [];
        const [headX, headY] = getCoordinates(head);
        result.push(consCell([headX, headY], 'active'));
        result.push(consCell([headX - 1, headY], 'active'));
        result.push(consCell([headX, headY + 1], 'active'));
        result.push(consCell([headX - 1, headY + 1], 'active'));
        return result;
      },
      getSize: () => ({ height: 2, width: 2 }),
    },
  };

  @readonly
  type = 'O';

  getSize() {
    return FigureO.alignment[this.direction].getSize();
  }

  getCells() {
    return FigureO.alignment[this.direction].getCells(this.head);
  }

  rotate() {
    return this;
  }

  setPosition(x, y) {
    return new FigureO(consCell([x, y], 'active'), this.direction);
  }

  move(x, y) {
    const [headX, headY] = getCoordinates(this.head);
    return new FigureO(consCell([headX + x, headY + y], 'active'), this.direction);
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
