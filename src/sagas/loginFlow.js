import {
  put,
  take,
  call,
  fork,
  cancel,
  cancelled,
} from 'redux-saga/effects';
import * as action from 'actions';

const noop = () => null;

function* authorize(user, password) {
  try {
    const token = yield call(noop, user, password);
    yield put(action.user.loginSuccess(token));
    yield call(noop, { token });
    return token;
  } catch (e) {
    yield put(action.user.loginFailure(e));
    return e;
  } finally {
    if (yield cancelled()) {
      put(action.user.loginCancel());
    }
  }
}

export default function* loginFlow() {
  while (true) {
    const { user, password } = yield take('USER/LOGIN/REQUEST');

    const authorization = yield fork(authorize, user, password);
    const { type } = yield take(['USER/LOGOUT', 'USER/LOGIN/FAILURE']);
    if (type === 'USER/LOGOUT') {
      yield cancel(authorization);
    }
    yield call(noop, 'token');
  }
}
