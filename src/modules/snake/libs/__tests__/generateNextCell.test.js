import { generateNextCell } from '../generateNextCell';
import { cons as consCell } from 'libs/cell';
import { CONFIG } from '../../constants/config';

const { grid: { rows, cols } } = CONFIG;

const x = Math.floor(cols / 2);
const y = Math.floor(rows / 2);

describe('generateNextCell', () => {
  it('generates normal cell', () => {
    expect(
      generateNextCell(consCell([x, y]), 'up'),
    ).toEqual(consCell([x, y - 1]));

    expect(
      generateNextCell(consCell([x, y]), 'right'),
    ).toEqual(consCell([x + 1, y]));

    expect(
      generateNextCell(consCell([x, y]), 'down'),
    ).toEqual(consCell([x, y + 1]));

    expect(
      generateNextCell(consCell([x, y]), 'left'),
    ).toEqual(consCell([x - 1, y]));
  });

  it('generates shifted cell', () => {
    expect(
      generateNextCell(consCell([x, 0]), 'up'),
    ).toEqual(consCell([x, rows - 1]));

    expect(
      generateNextCell(consCell([cols - 1, y]), 'right'),
    ).toEqual(consCell([0, y]));

    expect(
      generateNextCell(consCell([x, rows - 1]), 'down'),
    ).toEqual(consCell([x, 0]));

    expect(
      generateNextCell(consCell([0, y]), 'left'),
    ).toEqual(consCell([cols - 1, y]));
  });

  it('throws error', () => {
    expect(
      () => generateNextCell(consCell([x, y]), 'back'),
    ).toThrow();
  });
});
