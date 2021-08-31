import React from 'react';
import { Provider } from 'react-redux';

import { store } from 'store';
import { MainRouter } from 'modules/main/components';

import './App.css';

export function App() {
  return (
    <Provider store={store}>
      <MainRouter />
    </Provider>
  );
}
