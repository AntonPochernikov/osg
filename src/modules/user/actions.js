import { createAction } from 'redux-actions';

// LOGIN FLOW
export const loginRequest = createAction('USER/LOGIN/REQUEST');
export const loginSuccess = createAction('USER/LOGIN/SUCCESS');
export const loginFailure = createAction('USER/LOGIN/FAILURE');
export const loginCancel = createAction('USER/LOGIN/CANCEL');
export const logout = createAction('USER/LOGOUT');
