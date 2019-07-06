import { cons as consCell, getCoordinates } from 'libs/cell.js';
import Figure from './Figure.js';

export default class FigureT extends Figure {
  static alignment = {
    down: {
      direction: 'down',
      startHead: consCell([5, 0], 'filled'),
      rotate: head => new FigureT(head, 'left'),
      getCells: (head) => {
        const result = [];
        const [headX, headY] = getCoordinates(head);
        result.push(consCell([headX, headY], 'filled'));
        result.push(consCell([headX - 1, headY + 1], 'filled'));
        result.push(consCell([headX, headY + 1], 'filled'));
        result.push(consCell([headX + 1, headY + 1], 'filled'));
        return result;
      },
      getSize: () => ({ height: 2, width: 3 }),
    },
    left: {
      direction: 'left',
      startHead: consCell([5, 0], 'filled'),
      rotate: head => new FigureT(head, 'up'),
      getCells: (head) => {
        const result = [];
        const [headX, headY] = getCoordinates(head);
        result.push(consCell([headX, headY], 'filled'));
        result.push(consCell([headX, headY + 1], 'filled'));
        result.push(consCell([headX, headY + 2], 'filled'));
        result.push(consCell([headX + 1, headY + 1], 'filled'));
        return result;
      },
      getSize: () => ({ height: 3, width: 2 }),
    },
    up: {
      direction: 'up',
      startHead: consCell([5, 0], 'filled'),
      rotate: head => new FigureT(head, 'right'),
      getCells: (head) => {
        const result = [];
        const [headX, headY] = getCoordinates(head);
        result.push(consCell([headX, headY + 1], 'filled'));
        result.push(consCell([headX - 1, headY], 'filled'));
        result.push(consCell([headX, headY], 'filled'));
        result.push(consCell([headX + 1, headY], 'filled'));
        return result;
      },
      getSize: () => ({ height: 2, width: 3 }),
    },
    right: {
      direction: 'right',
      startHead: consCell([5, 0], 'filled'),
      rotate: head => new FigureT(head, 'down'),
      getCells: (head) => {
        const result = [];
        const [headX, headY] = getCoordinates(head);
        result.push(consCell([headX, headY], 'filled'));
        result.push(consCell([headX, headY + 1], 'filled'));
        result.push(consCell([headX, headY + 2], 'filled'));
        result.push(consCell([headX - 1, headY + 1], 'filled'));
        return result;
      },
      getSize: () => ({ height: 3, width: 2 }),
    },
  };

  #type = 'T';

  getSize() {
    return FigureT.alignment[this.direction].getSize();
  }

  getCells() {
    return FigureT.alignment[this.direction].getCells(this.head);
  }

  rotate() {
    return FigureT.alignment[this.direction].rotate(this.head);
  }

  setPosition(x, y) {
    return new FigureT(consCell([x, y], 'filled'), this.direction);
  }

  move(x, y) {
    const [headX, headY] = getCoordinates(this.head);
    return new FigureT(consCell([headX + x, headY + y], 'filled'), this.direction);
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