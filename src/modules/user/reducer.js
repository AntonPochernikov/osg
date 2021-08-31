import { handleActions } from 'redux-actions';

const init = {
  name: 'Mystery Stranger',
};

export const userReducer = handleActions({}, init);
