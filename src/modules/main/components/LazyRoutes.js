import React from 'react';

import { IS_DEV } from 'constants/environment';
import { sleep } from 'utils/sleep';
import { store } from 'store';

export const HomePage = React.lazy(async () => {
  const [home] = await Promise.all([
    import(/* webpackChunkName: "home" */ 'modules/home/components/HomePage'),
    sleep(IS_DEV ? 0 : 1000),
  ]);
  return home;
});

export const Tetris = React.lazy(async () => {
  const [
    { default: tetrisReducer },
    tetris,
  ] = await Promise.all([
    import(/* webpackChunkName: "tetris-reducer" */ 'modules/tetris/reducer'),
    import(/* webpackChunkName: "tetris" */ 'modules/tetris/containers/Root'),
    sleep(IS_DEV ? 0 : 1000),
  ]);
  store.inject('tetris', tetrisReducer);
  return tetris;
});

export const Snake = React.lazy(async () => {
  const [
    { default: snakeReducer },
    snake,
  ] = await Promise.all([
    import(/* webpackChunkName: "snake-reducer" */ 'modules/snake/reducer'),
    import(/* webpackChunkName: "snake" */ 'modules/snake/containers/Root'),
    sleep(IS_DEV ? 0 : 1000),
  ]);
  store.inject('snake', snakeReducer);
  return snake;
});
