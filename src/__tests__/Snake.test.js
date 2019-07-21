import Snake from 'libs/Snake';
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
        .move('down')
        .getCells(),
    ).toEqual([
      cons([8, 5], 'filled'),
      cons([8, 6], 'filled'),
      cons([8, 7], 'filled'),
    ]);

    expect(
      snake
        .move('right')
        .move('up')
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
        .eat()
        .getCells(),
    ).toEqual([
      cons([8, 4], 'filled'),
      cons([8, 5], 'filled'),
      cons([8, 6], 'filled'),
      cons([8, 7], 'filled'),
    ]);
  });
});
