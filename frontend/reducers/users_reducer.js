import { RECEIVE_CURRENT_USER } from '../actions/session_actions';
import { RECEIVE_SERVER } from '../actions/server_actions';
import { RECEIVE_ALL_USERS } from '../actions/user_actions';

export default (state = {}, action) => {
  Object.freeze(state);
  
  switch (action.type) {
    case RECEIVE_ALL_USERS:
      return action.users
    case RECEIVE_CURRENT_USER:
      return Object.assign({}, state, { [action.user.id]: action.user });
    case RECEIVE_SERVER:
      return Object.assign({}, state, action.server.members)
    default:
      return state;
  }
}
