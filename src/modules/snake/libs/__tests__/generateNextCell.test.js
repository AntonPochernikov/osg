import { generateNextCell } from '../generateNextCell';
import { makeCell } from 'utils/cell';
import { CONFIG } from '../../constants/config';

const { grid: { rows, cols } } = CONFIG;

const x = Math.floor(cols / 2);
const y = Math.floor(rows / 2);

describe('generateNextCell', () => {
  it('generates normal cell', () => {
    expect(
      generateNextCell(makeCell([x, y]), 'up'),
    ).toEqual(makeCell([x, y - 1]));

    expect(
      generateNextCell(makeCell([x, y]), 'right'),
    ).toEqual(makeCell([x + 1, y]));

    expect(
      generateNextCell(makeCell([x, y]), 'down'),
    ).toEqual(makeCell([x, y + 1]));

    expect(
      generateNextCell(makeCell([x, y]), 'left'),
    ).toEqual(makeCell([x - 1, y]));
  });

  it('generates shifted cell', () => {
    expect(
      generateNextCell(makeCell([x, 0]), 'up'),
    ).toEqual(makeCell([x, rows - 1]));

    expect(
      generateNextCell(makeCell([cols - 1, y]), 'right'),
    ).toEqual(makeCell([0, y]));

    expect(
      generateNextCell(makeCell([x, rows - 1]), 'down'),
    ).toEqual(makeCell([x, 0]));

    expect(
      generateNextCell(makeCell([0, y]), 'left'),
    ).toEqual(makeCell([cols - 1, y]));
  });

  it('throws error', () => {
    expect(
      () => generateNextCell(makeCell([x, y]), 'back'),
    ).toThrow();
  });
});
