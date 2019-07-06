import React from 'react';
import { Provider } from 'react-redux';
import store from './store/store.js';
import './App.css';
import MainRouter from './components/router/MainRouter.jsx';

export default function App() {
  return (
    <Provider store={store}>
      <MainRouter />
    </Provider>
  );
}
