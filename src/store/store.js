import {
  compose,
  applyMiddleware,
  createStore,
  combineReducers,
} from 'redux';
import createSagaMiddleWare from 'redux-saga';

import { userReducer } from 'modules/user/reducer';
import { rootSaga } from 'modules/main/sagas';

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const sagaMiddleWare = createSagaMiddleWare();
const staticReducers = {
  user: userReducer,
};

const createReducer = asyncReducers => combineReducers({
  ...staticReducers,
  ...asyncReducers,
});

export const store = createStore(
  createReducer(),
  composeEnhancers(applyMiddleware(sagaMiddleWare)),
);

store.asyncReducers = {};
store.inject = (key, reducer) => {
  store.asyncReducers[key] = reducer;
  store.replaceReducer(createReducer(store.asyncReducers));
};

sagaMiddleWare.run(rootSaga);
