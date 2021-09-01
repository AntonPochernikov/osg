import { makeCell, getCoordinates } from 'utils/cell';

import { Figure } from './Figure';

export class FigureL extends Figure {
  static alignment = {
    down: {
      direction: 'down',
      startHead: makeCell([5, 0], { state: 'filled' }),
      rotate: head => new FigureL(head, 'left'),
      getCells: (head) => {
        const result = [];
        const [headX, headY] = getCoordinates(head);
        result.push(makeCell([headX + 1, headY], { state: 'filled' }));
        result.push(makeCell([headX - 1, headY + 1], { state: 'filled' }));
        result.push(makeCell([headX, headY + 1], { state: 'filled' }));
        result.push(makeCell([headX + 1, headY + 1], { state: 'filled' }));
        return result;
      },
      getSize: () => ({ height: 2, width: 3 }),
    },
    left: {
      direction: 'left',
      startHead: makeCell([5, 0], { state: 'filled' }),
      rotate: head => new FigureL(head, 'up'),
      getCells: (head) => {
        const result = [];
        const [headX, headY] = getCoordinates(head);
        result.push(makeCell([headX - 1, headY], { state: 'filled' }));
        result.push(makeCell([headX - 1, headY + 1], { state: 'filled' }));
        result.push(makeCell([headX - 1, headY + 2], { state: 'filled' }));
        result.push(makeCell([headX, headY + 2], { state: 'filled' }));
        return result;
      },
      getSize: () => ({ height: 3, width: 2 }),
    },
    up: {
      direction: 'up',
      startHead: makeCell([5, 0], { state: 'filled' }),
      rotate: head => new FigureL(head, 'right'),
      getCells: (head) => {
        const result = [];
        const [headX, headY] = getCoordinates(head);
        result.push(makeCell([headX - 1, headY + 1], { state: 'filled' }));
        result.push(makeCell([headX - 1, headY], { state: 'filled' }));
        result.push(makeCell([headX, headY], { state: 'filled' }));
        result.push(makeCell([headX + 1, headY], { state: 'filled' }));
        return result;
      },
      getSize: () => ({ height: 2, width: 3 }),
    },
    right: {
      direction: 'right',
      startHead: makeCell([5, 0], { state: 'filled' }),
      rotate: head => new FigureL(head, 'down'),
      getCells: (head) => {
        const result = [];
        const [headX, headY] = getCoordinates(head);
        result.push(makeCell([headX, headY], { state: 'filled' }));
        result.push(makeCell([headX, headY + 1], { state: 'filled' }));
        result.push(makeCell([headX, headY + 2], { state: 'filled' }));
        result.push(makeCell([headX - 1, headY], { state: 'filled' }));
        return result;
      },
      getSize: () => ({ height: 3, width: 2 }),
    },
  };

  #type = 'L';

  getSize() {
    return FigureL.alignment[this.direction].getSize();
  }

  getCells() {
    return FigureL.alignment[this.direction].getCells(this.head);
  }

  rotate() {
    return FigureL.alignment[this.direction].rotate(this.head);
  }

  setPosition(x, y) {
    return new FigureL(makeCell([x, y], { state: 'filled' }), this.direction);
  }

  move(x, y) {
    const [headX, headY] = getCoordinates(this.head);
    return new FigureL(makeCell([headX + x, headY + y], { state: 'filled' }), this.direction);
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
