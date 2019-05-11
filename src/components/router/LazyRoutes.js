import React from 'react';
import store from 'store/store.js';
import delay from 'libs/delay.js';
import isDev from 'constants/isDev.js';

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

export const HomePage = React.lazy(async () => {
  const [home] = await Promise.all([
    import(/* webpackChunkName: "home" */ 'components/home/HomePage.jsx'),
    delay(isDev ? 0 : 1000),
  ]);
  return home;
});
