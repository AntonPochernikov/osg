import { makeCell, getCoordinates } from 'utils/cell';

import { Figure } from './Figure';

export class FigureI extends Figure {
  static alignment = {
    down: {
      direction: 'down',
      startHead: makeCell([5, 0], { state: 'filled' }),
      rotate: head => new FigureI(head, 'right'),
      getCells: (head) => {
        const result = [];
        const [headX, headY] = getCoordinates(head);
        for (let y = headY; y < headY + 4; y += 1) {
          result.push(makeCell([headX, y], { state: 'filled' }));
        }
        return result;
      },
      getSize: () => ({ height: 4, width: 1 }),
    },
    right: {
      direction: 'right',
      startHead: makeCell([5, 0], { state: 'filled' }),
      rotate: head => new FigureI(head, 'down'),
      getCells: (head) => {
        const result = [];
        const [headX, headY] = getCoordinates(head);
        for (let x = headX - 2; x < headX + 2; x += 1) {
          result.push(makeCell([x, headY], { state: 'filled' }));
        }
        return result;
      },
      getSize: () => ({ height: 1, width: 4 }),
    },
  }

  #type = 'I';

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
    return new FigureI(makeCell([x, y], { state: 'filled' }), this.direction);
  }

  move(x, y) {
    const [headX, headY] = getCoordinates(this.head);
    return new FigureI(makeCell([headX + x, headY + y], { state: 'filled' }), this.direction);
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
