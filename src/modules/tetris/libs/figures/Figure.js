import { makeCell } from 'utils/cell';

export class Figure {
  constructor(head = makeCell([0, 0]), direction = 'down') {
    this.head = head;
    this.direction = direction;
  }

  getCells() {
    return [];
  }
}
