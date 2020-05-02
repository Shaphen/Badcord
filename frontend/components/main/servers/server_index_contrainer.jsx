import { connect } from 'react-redux';
import ServerIndex from './server_index';
import { fetchServers, fetchServer } from '../../../actions/server_actions';
import { logout } from '../../../actions/session_actions';

const mSTP = state => {
  let res
  if (state.entities.servers) {
    res = Object.values(state.entities.servers)
  }
  return {
    servers: res,
    currentUser: state.entities.users[state.session.id]
  }
};

const mDTP = dispatch => ({
  getServers: () => dispatch(fetchServers()),
  getServer: serverId => dispatch(fetchServer(serverId)),
  logout: () => dispatch(logout())
});

export default connect(mSTP, mDTP)(ServerIndex)