import { connect } from 'react-redux';
import ServerDisplay from './server_display';
import { fetchServers, fetchServer, deleteServer } from '../../../actions/server_actions';

const mSTP = state => {
  return {
    servers: state.entities.servers,
  }
};

const mDTP = dispatch => ({
  getServers: () => dispatch(fetchServers()),
  getServer: serverId => dispatch(fetchServer(serverId)),
  deleteServer: serverId => dispatch(deleteServer(serverId))
});

export default connect(mSTP, mDTP)(ServerDisplay)