import { connect } from 'react-redux';
import ServerDisplay from './server_display';
import { fetchServer, deleteServer } from '../../../actions/server_actions';

const mSTP = state => {
  return {
    servers: state.entities.servers,
  }
};

const mDTP = dispatch => ({
  getServer: serverId => dispatch(fetchServer(serverId)),
  deleteServer: serverId => dispatch(deleteServer(serverId))
});

export default connect(mSTP, mDTP)(ServerDisplay)