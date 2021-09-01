import { Snake } from '../Snake';
import { makeCell } from 'utils/cell';

describe('snake', () => {
  const snake = new Snake([
    makeCell([8, 5], 'filled'),
    makeCell([8, 6], 'filled'),
    makeCell([8, 7], 'filled'),
  ]);

  test('get cells', () => {
    expect(snake.getCells()).toEqual([
      makeCell([8, 5], 'filled'),
      makeCell([8, 6], 'filled'),
      makeCell([8, 7], 'filled'),
    ]);
  });

  test('move', () => {
    expect(
      snake
        .move(makeCell([8, 4], 'filled'))
        .getCells(),
    ).toEqual([
      makeCell([8, 4], 'filled'),
      makeCell([8, 5], 'filled'),
      makeCell([8, 6], 'filled'),
    ]);

    expect(
      snake
        .move(makeCell([9, 5], 'filled'))
        .move(makeCell([9, 4], 'filled'))
        .getCells(),
    ).toEqual([
        makeCell([9, 4], 'filled'),
        makeCell([9, 5], 'filled'),
        makeCell([8, 5], 'filled'),
    ]);
  });

  test('eat', () => {
    expect(
      snake
        .eat(makeCell([8, 4], 'filled'),)
        .getCells(),
    ).toEqual([
      makeCell([8, 4], 'filled'),
      makeCell([8, 5], 'filled'),
      makeCell([8, 6], 'filled'),
      makeCell([8, 7], 'filled'),
    ]);
  });

  test('get length', () => {
    expect(snake.getLength()).toEqual(3);
    expect(
      snake
        .eat(makeCell[0, 0], 'filled')
        .getLength(),
    ).toEqual(4)
  });

  test('is colliding', () => {
    expect(snake.isColliding()).toBeFalsy();
    expect(
      snake
        .move(makeCell([8, 6], 'filled'))
        .isColliding()
    ).toBeTruthy();
  });
});
