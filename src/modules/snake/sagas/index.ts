import { all } from 'redux-saga/effects';

import { snakeFlow } from './snakeFlow';

export function* snakeSagas() {
  yield all([
    snakeFlow(),
  ]);
}
