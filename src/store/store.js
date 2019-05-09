import {
  compose,
  applyMiddleware,
  createStore,
  combineReducers,
} from 'redux';
import createSagaMiddleWare from 'redux-saga';

import user from 'reducers/user';
import rootSaga from 'sagas';

// eslint-disable-next-line no-underscore-dangle
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const sagaMiddleWare = createSagaMiddleWare();
const staticReducers = {
  user,
};

const createReducer = asyncReducers => combineReducers({
  ...staticReducers,
  ...asyncReducers,
});

const store = createStore(
  createReducer(),
  composeEnhancers(applyMiddleware(sagaMiddleWare)),
);

store.asyncReducers = {};
store.inject = (key, reducer) => {
  store.asyncReducers[key] = reducer;
  store.replaceReducer(createReducer(store.asyncReducers));
};

sagaMiddleWare.run(rootSaga);

export default store;
