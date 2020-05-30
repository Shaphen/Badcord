import { signupUser, loginUser, logoutUser } from '../util/session_api_util';
import { toast } from "react-toastify";
// import "react-toastify/scss/main.scss";

export const RECEIVE_CURRENT_USER = 'RECEIVE_CURRENT_USER';
export const LOGOUT_CURRENT_USER = 'LOGOUT_CURRENT_USER';
export const RECEIVE_ERRORS = 'RECEIVE_ERRORS';
export const CLEAR_SESSION_ERRORS = "CLEAR_SESSION_ERRORS";

const receiveCurrentUser = user => ({
  type: RECEIVE_CURRENT_USER,
  user
});

const logoutCurrentUser = () => ({
  type: LOGOUT_CURRENT_USER
});

export const receiveErrors = errors => ({
  type: RECEIVE_ERRORS,
  errors
});

// const notifyError = message => {
//   toast.error(message);
// }

export const clearSessionErrors = () => ({
  type: CLEAR_SESSION_ERRORS
});

export const login = user => dispatch => loginUser(user)
  .then(user => dispatch(receiveCurrentUser(user)), err => {
    // err.responseJSON.map((error) => {
    //   return notifyError(error);
    // });
    dispatch(receiveErrors(err.responseJSON))
  });

export const logout = () => dispatch => logoutUser()
  .then(() => dispatch(logoutCurrentUser()))

export const signup = user => dispatch => signupUser(user)
  .then(user => dispatch(receiveCurrentUser(user)), err => {
    // err.ResponseJSON.map((error) => {
    //   return notifyError(error);
    // });
    dispatch(receiveErrors(err.responseJSON))
  });
