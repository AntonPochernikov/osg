import { cons as consCell } from '../cells.js';

export default class Figure {
  constructor(head = consCell([0, 0]), direction = 'down') {
    this.head = head;
    this.direction = direction;
  }

  getCells() {
    return [];
  }
}
