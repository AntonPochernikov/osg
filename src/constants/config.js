export const tetrisConfig = {
  speed: {
    min: 1,
    init: 4,
    max: 10,
    modificator: 0.7,
  },
  interval: 1000,
  score: {
    collision: 1,
    completedRow: 5,
  },
  grid: {
    cols: 10,
    rows: 20,
  },
};

export const snakeConfig = {
  speed: {
    min: 1,
    init: 4,
    max: 10,
    modificator: 0.7,
  },
  interval: 1000,
  score: {},
  grid: {
    cols: 10,
    rows: 20,
  },
};
