import {
  FigureI,
  FigureJ,
  FigureL,
  FigureO,
  FigureS,
  FigureT,
  FigureZ,
} from '..';

import { makeCell } from 'utils/cell';

describe('figures', () => {
  test('I', () => {
    const figure = new FigureI();
    expect(
      figure
        .rotate()
        .moveDown()
        .moveRight()
        .getCells()
    ).toEqual(
      expect.arrayContaining([
        makeCell([-1, 1], { state: 'filled' }),
        makeCell([0, 1], { state: 'filled' }),
        makeCell([1, 1], { state: 'filled' }),
        makeCell([2, 1], { state: 'filled' }),
      ]),
    );
  });
  test('J', () => {
    const figure = new FigureJ();
    expect(
      figure
        .rotate()
        .moveDown()
        .moveRight()
        .getCells()
    ).toEqual(
      expect.arrayContaining([
        makeCell([0, 1], { state: 'filled' }),
        makeCell([0, 2], { state: 'filled' }),
        makeCell([0, 3], { state: 'filled' }),
        makeCell([1, 1], { state: 'filled' }),
      ]),
    );
  });
  test('L', () => {
    const figure = new FigureL();
    expect(
      figure
        .rotate()
        .moveDown()
        .moveRight()
        .getCells()
    ).toEqual(
      expect.arrayContaining([
        makeCell([0, 1], { state: 'filled' }),
        makeCell([0, 2], { state: 'filled' }),
        makeCell([0, 3], { state: 'filled' }),
        makeCell([1, 3], { state: 'filled' }),
      ]),
    );
  });
  test('O', () => {
    const figure = new FigureO();
    expect(
      figure
        .rotate()
        .moveDown()
        .moveRight()
        .moveRight()
        .getCells()
    ).toEqual(
      expect.arrayContaining([
        makeCell([1, 1], { state: 'filled' }),
        makeCell([1, 2], { state: 'filled' }),
        makeCell([2, 1], { state: 'filled' }),
        makeCell([2, 2], { state: 'filled' }),
      ]),
    );
  });
  test('S', () => {
    const figure = new FigureS();
    expect(
      figure
        .rotate()
        .moveDown()
        .moveRight()
        .getCells()
    ).toEqual(
      expect.arrayContaining([
        makeCell([0, 1], { state: 'filled' }),
        makeCell([0, 2], { state: 'filled' }),
        makeCell([1, 2], { state: 'filled' }),
        makeCell([1, 3], { state: 'filled' }),
      ]),
    );
  });
  test('T', () => {
    const figure = new FigureT();
    expect(
      figure
        .rotate()
        .moveDown()
        .moveRight()
        .getCells()
    ).toEqual(
      expect.arrayContaining([
        makeCell([1, 1], { state: 'filled' }),
        makeCell([1, 2], { state: 'filled' }),
        makeCell([1, 3], { state: 'filled' }),
        makeCell([2, 2], { state: 'filled' }),
      ]),
    );
  });
  test('Z', () => {
    const figure = new FigureZ();
    expect(
      figure
        .rotate()
        .moveDown()
        .moveRight()
        .getCells()
    ).toEqual(
      expect.arrayContaining([
        makeCell([1, 1], { state: 'filled' }),
        makeCell([0, 2], { state: 'filled' }),
        makeCell([1, 2], { state: 'filled' }),
        makeCell([0, 3], { state: 'filled' }),
      ]),
    );
  });
});
