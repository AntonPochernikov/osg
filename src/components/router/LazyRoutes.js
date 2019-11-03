import React from 'react';
import store from 'store/store';
import delay from 'libs/delay';
import { isDev } from 'constants/environment';

export const HomePage = React.lazy(async () => {
  const [home] = await Promise.all([
    import(/* webpackChunkName: "home" */ 'components/home/HomePage.jsx'),
    delay(isDev ? 0 : 1000),
  ]);
  return home;
});

export const Tetris = React.lazy(async () => {
  const [
    { default: tetrisReducer },
    tetris,
  ] = await Promise.all([
    import(/* webpackChunkName: "tetris-reducer" */ 'reducers/tetris/index.js'),
    import(/* webpackChunkName: "tetris" */ 'components/tetris/Tetris.js'),
    delay(isDev ? 0 : 1000),
  ]);
  store.inject('tetris', tetrisReducer);
  return tetris;
});

export const Snake = React.lazy(async () => {
  const [
    { default: snakeReducer },
    snake,
  ] = await Promise.all([
    import(/* webpackChunkName: "snake-reducer" */ 'reducers/snake'),
    import(/* webpackChunkName: "snake" */ 'components/snake/Snake.js'),
    delay(isDev ? 0 : 1000),
  ]);
  store.inject('snake', snakeReducer);
  return snake;
});
