import { create as creatCell } from '../../libs/cells.js';

export class Figure {
  constructor(head = creatCell([0, 0], 'active', 'black'), direction = 'down') {
    this.head = head;
    this.direction = direction;
  }
}

export const isFigure = obj => obj instanceof Figure;
