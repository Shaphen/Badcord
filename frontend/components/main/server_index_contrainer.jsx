import { connect } from 'react-redux';
import ServerIndex from './server_index';
import { fetchServers, fetchServer } from '../../actions/server_actions';

const mSTP = state => ({
  servers: Object.values(state.entities.servers)
});

const mDTP = dispatch => ({
  getServers: () => dispatch(fetchServers()),
  getServer: serverId => dispatch(fetchServer(serverId))
});

export default connect(mSTP, mDTP)(ServerIndex)