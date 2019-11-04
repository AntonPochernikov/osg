import { all } from 'redux-saga/effects';
import snakeFlow from './snakeFlow';

export default function* snakeSagas() {
  yield all([
    snakeFlow(),
  ]);
}
