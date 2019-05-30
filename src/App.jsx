import React from 'react';
import { render } from 'react-dom';
import { Provider } from 'react-redux';
import { ThemeProvider } from 'styled-components';
import theme from 'constants/theme.js';
import store from './store/store.js';
import './App.css';
import MainRouter from './components/router/MainRouter.jsx';

render(
  <Provider store={store}>
    <ThemeProvider theme={theme}>
      <MainRouter />
    </ThemeProvider>
  </Provider>,
  document.getElementById('root'),
);
