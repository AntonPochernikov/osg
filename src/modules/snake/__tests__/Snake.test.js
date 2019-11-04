import Snake from '../libs/Snake';
import { cons } from 'libs/cell';

describe('snake', () => {
  const snake = new Snake([
    cons([8, 5], 'filled'),
    cons([8, 6], 'filled'),
    cons([8, 7], 'filled'),
  ]);

  test('get cells', () => {
    expect(snake.getCells()).toEqual([
      cons([8, 5], 'filled'),
      cons([8, 6], 'filled'),
      cons([8, 7], 'filled'),
    ]);
  });

  test('move', () => {
    expect(
      snake
        .move(cons([8, 4], 'filled'))
        .getCells(),
    ).toEqual([
      cons([8, 4], 'filled'),
      cons([8, 5], 'filled'),
      cons([8, 6], 'filled'),
    ]);

    expect(
      snake
        .move(cons([9, 5], 'filled'))
        .move(cons([9, 4], 'filled'))
        .getCells(),
    ).toEqual([
        cons([9, 4], 'filled'),
        cons([9, 5], 'filled'),
        cons([8, 5], 'filled'),
    ]);
  });

  test('eat', () => {
    expect(
      snake
        .eat(cons([8, 4], 'filled'),)
        .getCells(),
    ).toEqual([
      cons([8, 4], 'filled'),
      cons([8, 5], 'filled'),
      cons([8, 6], 'filled'),
      cons([8, 7], 'filled'),
    ]);
  });

  test('get length', () => {
    expect(snake.getLength()).toEqual(3);
    expect(
      snake
        .eat(cons[0, 0], 'filled')
        .getLength(),
    ).toEqual(4)
  });

  test('is colliding', () => {
    expect(snake.isColliding()).toBeFalsy();
    expect(
      snake
        .move(cons([8, 6], 'filled'))
        .isColliding()
    ).toBeTruthy();
  });
});
