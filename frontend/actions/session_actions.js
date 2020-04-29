import { signupUser, loginUser, logoutUser } from '../util/session_api_util';

export const RECEIVE_CURRENT_USER = 'RECEIVE_CURRENT_USER';
export const LOGOUT_CURRENT_USER = 'LOGOUT_CURRENT_USER';
export const RECEIVE_ERRORS = 'RECEIVE_ERRORS';

const receiveCurrentUser = user => ({
  type: RECEIVE_CURRENT_USER,
  user
});

const logoutCurrentUser = () => ({
  type: LOGOUT_CURRENT_USER
});

export const receiveErrors = errorsArr => ({
  type: RECEIVE_ERRORS,
  errorsArr
});

export const login = user => dispatch => loginUser(user)
  .then(user => dispatch(receiveCurrentUser(user)));

export const logout = () => dispatch => logoutUser()
  .then(() => dispatch(logoutCurrentUser()))

export const signup = user => dispatch => signupUser(user)
  .then(user => dispatch(receiveCurrentUser(user)))