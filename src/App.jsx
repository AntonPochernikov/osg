import React from 'react';
import { render } from 'react-dom';
import { Provider } from 'react-redux';
import store from './store/store.js';
import './App.css';
import MainRouter from './components/router/MainRouter.jsx';

render(
  <Provider store={store}>
    <MainRouter />
  </Provider>,
  document.getElementById('root'),
);
