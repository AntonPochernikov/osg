import React from 'react';
import store from 'store';
import sleep from 'libs/sleep';
import { isDev } from 'constants/environment';

export const HomePage = React.lazy(async () => {
  const [home] = await Promise.all([
    import(/* webpackChunkName: "home" */ 'modules/home/components/HomePage'),
    sleep(isDev ? 0 : 1000),
  ]);
  return home;
});

export const Tetris = React.lazy(async () => {
  const [
    { default: tetrisReducer },
    tetris,
  ] = await Promise.all([
    import(/* webpackChunkName: "tetris-reducer" */ 'modules/tetris/reducers'),
    import(/* webpackChunkName: "tetris" */ 'modules/tetris/containers/Root'),
    sleep(isDev ? 0 : 1000),
  ]);
  store.inject('tetris', tetrisReducer);
  return tetris;
});

export const Snake = React.lazy(async () => {
  const [
    { default: snakeReducer },
    snake,
  ] = await Promise.all([
    import(/* webpackChunkName: "snake-reducer" */ 'modules/snake/reducers'),
    import(/* webpackChunkName: "snake" */ 'modules/snake/containers/Root'),
    sleep(isDev ? 0 : 1000),
  ]);
  store.inject('snake', snakeReducer);
  return snake;
});
