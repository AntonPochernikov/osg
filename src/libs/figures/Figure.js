import { create as createCell } from '../cells.js';

class Figure {
  constructor(head = createCell([0, 0]), direction = 'down') {
    this.head = head;
    this.direction = direction;
  }

  getCells() {
    return [];
  }
}

export default Figure;
