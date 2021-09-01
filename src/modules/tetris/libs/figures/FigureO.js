import { makeCell, getCoordinates } from 'utils/cell';

import { Figure } from './Figure';

export class FigureO extends Figure {
  static alignment = {
    down: {
      direction: 'down',
      startHead: makeCell([5, 0], { state: 'filled' }),
      getCells: (head) => {
        const result = [];
        const [headX, headY] = getCoordinates(head);
        result.push(makeCell([headX, headY], { state: 'filled' }));
        result.push(makeCell([headX - 1, headY], { state: 'filled' }));
        result.push(makeCell([headX, headY + 1], { state: 'filled' }));
        result.push(makeCell([headX - 1, headY + 1], { state: 'filled' }));
        return result;
      },
      getSize: () => ({ height: 2, width: 2 }),
    },
  };

  #type = 'O';

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
    return new FigureO(makeCell([x, y], { state: 'filled' }), this.direction);
  }

  move(x, y) {
    const [headX, headY] = getCoordinates(this.head);
    return new FigureO(makeCell([headX + x, headY + y], { state: 'filled' }), this.direction);
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
