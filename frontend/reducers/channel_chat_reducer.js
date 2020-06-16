import { RECEIVE_ALL_MESSAGES, RECEIVE_MESSAGE, REMOVE_MESSAGE } from '../actions/channel_chat_actions';

const channelChatReducer = (state={}, action) => {
  Object.freeze(state);
  let nextState = Object.assign({}, state)
  
  switch (action.type) {
    case RECEIVE_ALL_MESSAGES:
      return action.messages;
    case RECEIVE_MESSAGE:
      const newMessage = { [action.message.id]: action.message };
      return Object.assign({}, nextState, newMessage);
    case REMOVE_MESSAGE:
      delete nextState[action.channelId];
      return nextState;
    default:
      return state;
  }
}

export default channelChatReducer;