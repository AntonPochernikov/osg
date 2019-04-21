import React from 'react';
import store from '../../store/store.js';
import delay from '../../libs/delay.js';

export const Tetris = React.lazy(async () => {
  const [
    { default: tetrisReducer },
    tetris,
  ] = await Promise.all([
    import(/* webpackChunkName: "tetris-reducer" */ '../../reducers/tetris/index.js'),
    import(/* webpackChunkName: "tetris" */ '../tetris/Tetris.js'),
    delay(500),
  ]);
  store.inject('tetris', tetrisReducer);
  return tetris;
});

export const HomePage = React.lazy(async () => {
  const [home] = await Promise.all([
    import(/* webpackChunkName: "home" */ '../home/HomePage.jsx'),
    delay(500),
  ]);
  return home;
});
