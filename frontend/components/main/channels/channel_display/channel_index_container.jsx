import { connect } from 'react-redux';
import ChannelIndex from './channel_index';
import { fetchChannels, fetchChannel, deleteChannel } from '../../../../actions/channel_actions'
import { withRouter } from 'react-router-dom'; //gives access to history, location, match(path params)

const mSTP = (state, ownProps) => {
  let channels
  if (state.entities.channels) {
    channels = Object.values(state.entities.channels)
  }
  debugger
  let res2
  if (ownProps.server) {
    res2 = ownProps.server.id
  }
  return {
    channels: channels,
    serverId: res2,
    currentUser: state.entities.users[state.session.id]
  }
}

const mDTP = dispatch => ({
  getChannels: serverId => dispatch(fetchChannels(serverId)),
  getChannel: channelId => dispatch(fetchChannel(channelId)),
  deleteChannel: channelId => dispatch(deleteChannel(channelId))
})

export default withRouter(connect(mSTP, mDTP)(ChannelIndex))