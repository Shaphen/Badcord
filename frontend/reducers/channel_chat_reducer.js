import { RECEIVE_ALL_MESSAGES } from '../actions/channel_chat_actions';

const channelChatReducer = (state={}, action) => {
  Object.freeze(state);
  
  switch (action.type) {
    case RECEIVE_ALL_MESSAGES:
      return action.messages;
    default:
      return state;
  }
}

export default channelChatReducer;