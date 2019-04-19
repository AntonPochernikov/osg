import { create as createCell } from '../cells.js';

export default class Figure {
  constructor(head = createCell([0, 0]), direction = 'down') {
    this.head = head;
    this.direction = direction;
  }

  getCells() {
    return [];
  }
}
