import React from 'react';
import { Provider } from 'react-redux';
import store from 'store/store';
import MainRouter from 'modules/main/components/MainRouter';
import './App.css';

export default function App() {
  return (
    <Provider store={store}>
      <MainRouter />
    </Provider>
  );
}
