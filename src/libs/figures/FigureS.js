import { cons as consCell, getCoordinates } from 'libs/cell.js';
import Figure from './Figure.js';

export default class FigureS extends Figure {
  static alignment = {
    down: {
      direction: 'down',
      startHead: consCell([5, 0], { state: 'filled' }),
      rotate: head => new FigureS(head, 'left'),
      getCells: (head) => {
        const result = [];
        const [headX, headY] = getCoordinates(head);
        result.push(consCell([headX, headY], { state: 'filled' }));
        result.push(consCell([headX - 1, headY + 1], { state: 'filled' }));
        result.push(consCell([headX, headY + 1], { state: 'filled' }));
        result.push(consCell([headX + 1, headY], { state: 'filled' }));
        return result;
      },
      getSize: () => ({ height: 2, width: 3 }),
    },
    left: {
      direction: 'left',
      startHead: consCell([5, 0], { state: 'filled' }),
      rotate: head => new FigureS(head, 'down'),
      getCells: (head) => {
        const result = [];
        const [headX, headY] = getCoordinates(head);
        result.push(consCell([headX - 1, headY], { state: 'filled' }));
        result.push(consCell([headX - 1, headY + 1], { state: 'filled' }));
        result.push(consCell([headX, headY + 1], { state: 'filled' }));
        result.push(consCell([headX, headY + 2], { state: 'filled' }));
        return result;
      },
      getSize: () => ({ height: 3, width: 2 }),
    },
  };

  #type = 'S';

  getSize() {
    return FigureS.alignment[this.direction].getSize();
  }

  getCells() {
    return FigureS.alignment[this.direction].getCells(this.head);
  }

  rotate() {
    return FigureS.alignment[this.direction].rotate(this.head);
  }

  setPosition(x, y) {
    return new FigureS(consCell([x, y], { state: 'filled' }), this.direction);
  }

  move(x, y) {
    const [headX, headY] = getCoordinates(this.head);
    return new FigureS(consCell([headX + x, headY + y], { state: 'filled' }), this.direction);
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
