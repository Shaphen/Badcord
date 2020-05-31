import { combineReducers } from 'redux';
import sessionErrorsReducer from './session_errors_reducer';
import serverErrorsReducer from './server_errors_reducer';
import channelErrorsReducer from './channel_errors_reducer';
import channelChatErrorsReducer from './channel_chat_errors_reducer';

const errorsReducer = combineReducers({
  session: sessionErrorsReducer,
  server: serverErrorsReducer,
  channel: channelErrorsReducer,
  channelChat: channelChatErrorsReducer
});

export default errorsReducer;