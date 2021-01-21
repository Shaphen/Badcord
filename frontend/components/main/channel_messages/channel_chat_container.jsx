import { connect } from 'react-redux';
import ChannelChat from './channel_chat';
import { withRouter } from 'react-router-dom';
import { selectMembersByServer } from '../../../reducers/selectors';
import { fetchChannel } from '../../../actions/channel_actions';
import { fetchMessages, deleteMessage, createMessage } from '../../../actions/channel_chat_actions';
import { selectMessagesByCurrentUser } from '../../../reducers/selectors'; // add in cleanup

const mSTP = (state, ownProps) => {
  let messages
  if (state.entities.channelChat) {
    messages = Object.values(state.entities.channelChat)
  }
  let serverMembers;
  if (state.entities.servers && state.entities.users) {
    serverMembers = selectMembersByServer(state, ownProps.match.params.serverId)
  }
  let currentChannelId
  if (state.entities.channels) {
    currentChannelId = ownProps.match.params.channelId
  }
  
  return {
    currentUser: state.entities.users[state.session.id],
    users: state.entities.users,
    members: serverMembers,
    channels: state.entities.channels,
    servers: state.entities.servers,
    errors: state.errors.session,
    messages: messages,
    filterMessages: selectMessagesByCurrentUser(messages, currentChannelId),
  }
};

const mDTP = dispatch => ({
  getChannel: channelId => dispatch(fetchChannel(channelId)),
  getMessages: () => dispatch(fetchMessages()),
  createMessage: message => dispatch(createMessage(message)),
  deleteMessage: messageId => dispatch(deleteMessage(messageId)),
});

export default withRouter(connect(mSTP, mDTP)(ChannelChat));