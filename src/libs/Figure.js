import { create as createCell } from '../cells.js';

export default class Figure {
  constructor(head = createCell([0, 0]), direction = 'down') {
    this.head = head;
    this.direction = direction;
  }

  move(x, y) {
    const headX = getCol(this.head);
    const headY = getRow(this.head);
    return new FigureI(new Cell([headX + x, headY + y]), this.direction);
  }

  moveDown() {
    this.move(0, 1);
  }
  moveLeft() {
    this.move(-1, 0);
  }
  moveRight() {
    this.move(1, 0);
  }
}
