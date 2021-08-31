import { cons as consCell, getCoordinates } from 'libs/cell';

import { Figure } from './Figure';

export class FigureJ extends Figure {
  static alignment = {
    down: {
      direction: 'down',
      startHead: consCell([5, 0], { state: 'filled' }),
      rotate: head => new FigureJ(head, 'left'),
      getCells: (head) => {
        const result = [];
        const [headX, headY] = getCoordinates(head);
        result.push(consCell([headX - 1, headY], { state: 'filled' }));
        result.push(consCell([headX - 1, headY + 1], { state: 'filled' }));
        result.push(consCell([headX, headY + 1], { state: 'filled' }));
        result.push(consCell([headX + 1, headY + 1], { state: 'filled' }));
        return result;
      },
      getSize: () => ({ height: 2, width: 3 }),
    },
    left: {
      direction: 'left',
      startHead: consCell([5, 0], { state: 'filled' }),
      rotate: head => new FigureJ(head, 'up'),
      getCells: (head) => {
        const result = [];
        const [headX, headY] = getCoordinates(head);
        result.push(consCell([headX - 1, headY], { state: 'filled' }));
        result.push(consCell([headX - 1, headY + 1], { state: 'filled' }));
        result.push(consCell([headX - 1, headY + 2], { state: 'filled' }));
        result.push(consCell([headX, headY], { state: 'filled' }));
        return result;
      },
      getSize: () => ({ height: 3, width: 2 }),
    },
    up: {
      direction: 'up',
      startHead: consCell([5, 0], { state: 'filled' }),
      rotate: head => new FigureJ(head, 'right'),
      getCells: (head) => {
        const result = [];
        const [headX, headY] = getCoordinates(head);
        result.push(consCell([headX + 1, headY + 1], { state: 'filled' }));
        result.push(consCell([headX - 1, headY], { state: 'filled' }));
        result.push(consCell([headX, headY], { state: 'filled' }));
        result.push(consCell([headX + 1, headY], { state: 'filled' }));
        return result;
      },
      getSize: () => ({ height: 2, width: 3 }),
    },
    right: {
      direction: 'right',
      startHead: consCell([5, 0], { state: 'filled' }),
      rotate: head => new FigureJ(head, 'down'),
      getCells: (head) => {
        const result = [];
        const [headX, headY] = getCoordinates(head);
        result.push(consCell([headX, headY], { state: 'filled' }));
        result.push(consCell([headX, headY + 1], { state: 'filled' }));
        result.push(consCell([headX, headY + 2], { state: 'filled' }));
        result.push(consCell([headX - 1, headY + 2], { state: 'filled' }));
        return result;
      },
      getSize: () => ({ height: 3, width: 2 }),
    },
  };

  #type = 'J';

  getSize() {
    return FigureJ.alignment[this.direction].getSize();
  }

  getCells() {
    return FigureJ.alignment[this.direction].getCells(this.head);
  }

  rotate() {
    return FigureJ.alignment[this.direction].rotate(this.head);
  }

  setPosition(x, y) {
    return new FigureJ(consCell([x, y], { state: 'filled' }), this.direction);
  }

  move(x, y) {
    const [headX, headY] = getCoordinates(this.head);
    return new FigureJ(consCell([headX + x, headY + y], { state: 'filled' }), this.direction);
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
