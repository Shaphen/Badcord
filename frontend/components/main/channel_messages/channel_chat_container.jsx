import { connect } from 'react-redux';
import ChannelChat from './channel_chat';
import { fetchChannel } from '../../../actions/channel_actions';

const mSTP = state => {
  return {
    currentUser: state.entities.users[state.session.id],
    channels: state.entities.channels,
  }
};

const mDTP = dispatch => ({
  getChannel: channelId => dispatch(fetchChannel(channelId)),
});

export default connect(mSTP, mDTP)(ChannelChat)