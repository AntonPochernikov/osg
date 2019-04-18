import React from 'react';
import store from '../../store/store.js';

export const Tetris = React.lazy(async () => {
  const {
    default: tetrisReducer,
  } = await import(/* webpackChunkName: "tetris-reducer" */ '../../reducers/tetris/index.js');
  store.inject('tetris', tetrisReducer);
  return import(/* webpackChunkName: "tetris" */ '../tetris/Tetris.js');
});

export const HomePage = React.lazy(async () => import(/* webpackChunkName: "home" */ '../home/HomePage.jsx'));
