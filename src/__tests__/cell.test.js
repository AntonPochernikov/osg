import {
  cons,
  isCell,
  getCoordinates,
  getCol,
  getRow,
  getId,
  getState,
  getColor,
  getContent,
  isFilled,
  haveSameCoordinates,
  toString,
  moveDown,
  paint,
} from 'libs/cell';

const c1 = cons([1, 1], { state: 'empty' });
const c2 = cons([5, 0], { state: 'filled', color: 'yellow' });
const c3 = cons([5, 0], { state: 'withContent', color: 'black', content: 'content' });

describe('cell abstraction', () => {
  test('cons', () => {
    expect(cons([1, 3], { state: 'empty' })).toEqual({
      coordinates: [1, 3],
      state: 'empty',
      color: 'black',
      content: null,
      isCell: true,
    });

    expect(() => cons(['1', 3], { state: 'empty' })).toThrow();
    expect(() => cons('string', { state: 'empty' })).toThrow();
  });

  test('isCell', () => {
    expect(isCell(c1)).toBeTruthy();
    expect(isCell()).toBeFalsy();
    expect(isCell(null)).toBeFalsy();
  });

  test('getCoordinates', () => {
    expect(getCoordinates(c1)).toEqual([1, 1]);
    expect(() => getCoordinates(null)).toThrow();
  });

  test('getCol', () => {
    expect(getCol(c2)).toBe(5);
  });

  test('getRow', () => {
    expect(getRow(c2)).toBe(0);
  });

  test('getId', () => {
    expect(getId(c2)).toBe(5);
    expect(getId(c1)).toBe(11);
  });

  test('getState', () => {
    expect(getState(c1)).toBe('empty');
    expect(getState(c2)).toBe('filled');
    expect(getState(c3)).toBe('withContent');
  });

  test('getColor', () => {
    expect(getColor(c2)).toBe('yellow');
  });

  test('getContent', () => {
    expect(getContent(c1)).toBe(null);
    expect(getContent(c3)).toBe('content');
  });
});

describe('cell operations', () => {
  test('isFilled', () => {
    expect(isFilled(c1)).toBeFalsy();
    expect(isFilled(c2)).toBeTruthy();
  });

  test('haveSameCoordinates', () => {
    expect(haveSameCoordinates(c1, c2)).toBeFalsy();
    expect(haveSameCoordinates(c2, c3)).toBeTruthy();
  });

  test('toString', () => {
    expect(toString(c1)).toBe(
      'coorinates: [1, 1], state: empty, color: black, content: null',
    );
    expect(toString(c3)).toBe(
      'coorinates: [5, 0], state: withContent, color: black, content: content',
    );
  });

  test('moveDown', () => {
    expect(moveDown(c3)).toEqual(cons([getCol(c3), getRow(c3) + 1], {
      state: getState(c3),
      color: getColor(c3),
      content: getContent(c3),
    }));
  });

  test('paint', () => {
    expect(paint(c1, 'green')).toEqual(cons(getCoordinates(c1), {
      state: getState(c1),
      color: 'green',
      content: getContent(c1),
    }));
  });
});
