import { connect } from 'react-redux';
import ServerDisplay from './server_display';
import { fetchServer } from '../../../actions/server_actions';
import { logout } from '../../../actions/session_actions';

const mSTP = state => {
  return {
    servers: state.entities.servers,
    currentUser: state.entities.users[state.session.id]
  }
};

const mDTP = dispatch => ({
  getServer: serverId => dispatch(fetchServer(serverId)),
});

export default connect(mSTP, mDTP)(ServerDisplay)