import { connect } from 'react-redux';
import ChannelChat from './channel_chat';
import { fetchChannel } from '../../../actions/channel_actions';
import { fetchMessages } from '../../../actions/channel_chat_actions'

const mSTP = (state, ownProps) => {
  let messages
  if (state.entities.channelChat) {
    messages = Object.values(state.entities.channelChat)
  }

  let messageTexts = []
  if (messages.length) {
    messages.map(message => {
      if (ownProps.match.params.channelId == message.channel_id) {
        messageTexts.push(message.body)
      }
    });
  }
  
  return {
    currentUser: state.entities.users[state.session.id],
    users: state.entities.users,
    channels: state.entities.channels,
    errors: state.errors.session,
    messages: messages,
    messageTexts: messageTexts
  }
};

const mDTP = dispatch => ({
  getChannel: channelId => dispatch(fetchChannel(channelId)),
  getMessages: () => dispatch(fetchMessages())
});

export default connect(mSTP, mDTP)(ChannelChat)