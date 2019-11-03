import React from 'react';
import { Provider } from 'react-redux';
import store from 'store/store.js';
import MainRouter from 'components/router/MainRouter.jsx';
import './App.css';

export default function App() {
  return (
    <Provider store={store}>
      <MainRouter />
    </Provider>
  );
}
