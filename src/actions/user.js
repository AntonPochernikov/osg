import { createAction } from 'redux-actions';

// LOGIN FLOW
export const loginUserRequest = createAction('USER/LOGIN/REQUEST');
export const loginUserSuccess = createAction('USER/LOGIN/SUCCESS');
export const loginUserFailure = createAction('USER/LOGIN/FAILURE');
export const loginUserCancel = createAction('USER/LOGIN/CANCEL');
export const logoutUser = createAction('USER/LOGOUT');
