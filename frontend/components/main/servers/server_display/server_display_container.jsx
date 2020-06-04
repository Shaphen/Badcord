import { connect } from 'react-redux';
import ServerDisplay from './server_display';
import { fetchServers, fetchServer, deleteServer, leaveServer } from '../../../../actions/server_actions';

const mSTP = (state, ownProps) => {
  return {
    currentUser: state.entities.users[state.session.id],
    servers: state.entities.servers,
    serverId: parseInt(ownProps.match.params.server_id)
  }
};

const mDTP = dispatch => ({
  getServers: () => dispatch(fetchServers()),
  getServer: serverId => dispatch(fetchServer(serverId)),
  deleteServer: serverId => dispatch(deleteServer(serverId)),
  leaveServer: serverId => dispatch(leaveServer(serverId))
});

export default connect(mSTP, mDTP)(ServerDisplay)