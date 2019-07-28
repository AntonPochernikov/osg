import {
  initial,
  head,
  tail,
} from 'lodash';
import { haveSameCoordinates } from 'libs/cell';

export default class Snake {
  constructor(cells) {
    this.cells = cells;
  }

  getLength() {
    return this.cells.length;
  }

  eat(cell) {
    return new Snake([cell, ...this.getCells()]);
  }

  getCells() {
    return this.cells;
  }

  getHead() {
    return head(this.cells);
  }

  isColliding() {
    const h = this.getHead();
    return tail(this.cells).some(c => haveSameCoordinates(c, h));
  }

  move(cell) {
    return new Snake([cell, ...initial(this.cells)])
  }
}
