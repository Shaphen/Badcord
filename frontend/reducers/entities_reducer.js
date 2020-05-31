import { combineReducers } from 'redux';
import usersReducer from './users_reducer';
import serversReducer from './servers_reducer';
import channelsReducer from './channels_reducer';
import channelChatReducer from './channel_chat_reducer';

const entitiesReducer = combineReducers({
  users: usersReducer,
  servers: serversReducer,
  channels: channelsReducer,
  channelChat: channelChatReducer
});

export default entitiesReducer;