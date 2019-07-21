import { cons, getCoordinates } from 'libs/cell';
import { capitalize, initial } from 'lodash';

export default class Snake {
  constructor(cells, direction = 'up') {
    this.cells = cells;
    this.direction = direction;
  }

  static directions = {
    up: {
      left: true,
      right: true,
      up: true,
    },
    right: {
      up: true,
      down: true,
      right: true,
    },
    down: {
      left: true,
      right: true,
      down: true,
    },
    left: {
      up: true,
      down: true,
      left: true,
    },
  };

  getLength() {
    return this.cells.length;
  }

  eat() {
    const newCell = this.getNextCell(this.direction);
    return new Snake([newCell, ...this.cells], this.direction);
  }

  getNextCell(direction) {
    const head = this.cells[0];
    const [hCol, hRow] = getCoordinates(head);
    switch (direction) {
      case 'up': {
        return cons([hCol, hRow - 1], 'filled');
      }
      case 'right': {
        return cons([hCol + 1, hRow], 'filled');
      }
      case 'down': {
        return cons([hCol, hRow + 1], 'filled');
      }
      case 'left': {
        return cons([hCol - 1, hRow], 'filled');
      }
      default: {
        throw new Error(`Invalid direction -- GET-NEXT-CELL, ${direction}`)
      }
    }
  }

  getCells() {
    return this.cells;
  }

  move(nextDir) {
    if (!Snake.directions[this.direction][nextDir]) {
      return this;
    }
    return this[`move${capitalize(nextDir)}`]();
  }

  moveDown() {
    const nextCells = [this.getNextCell('down'), ...initial(this.cells)];
    return new Snake(nextCells, 'down');
  }

  moveUp() {
    const nextCells = [this.getNextCell('up'), ...initial(this.cells)];
    return new Snake(nextCells, 'up');
  }
W
  moveLeft() {
    const nextCells = [this.getNextCell('left'), ...initial(this.cells)];
    return new Snake(nextCells, 'left');
  }

  moveRight() {
    const nextCells = [this.getNextCell('right'), ...initial(this.cells)];
    return new Snake(nextCells, 'right');
  }
}
