import { RECEIVE_ERRORS, RECEIVE_CURRENT_USER } from '../actions/session_actions';

export default (state=[], action) => {
  Object.freeze(state)
  let errors = Object.assign([], state)
  switch (action.type) {
    case RECEIVE_ERRORS:
      action.errors.forEach(error => {
        errors << error
      });
    case RECEIVE_CURRENT_USER:
      errors = []
      return errors;
    default:
      return state;
  }
}
