import { connect } from 'react-redux';
import ChannelChat from './channel_chat';
import { fetchChannel } from '../../../actions/channel_actions';
import { fetchMessages } from '../../../actions/channel_chat_actions';
import { selectMessagesByChannel } from '../../../reducers/selectors'; // add in cleanup

const mSTP = (state) => {
  let messages
  if (state.entities.channelChat) {
    messages = Object.values(state.entities.channelChat)
  }
  
  return {
    currentUser: state.entities.users[state.session.id],
    users: state.entities.users,
    channels: state.entities.channels,
    errors: state.errors.session,
    messages: messages,
  }
};

const mDTP = dispatch => ({
  getChannel: channelId => dispatch(fetchChannel(channelId)),
  getMessages: () => dispatch(fetchMessages())
});

export default connect(mSTP, mDTP)(ChannelChat)