import { connect } from 'react-redux';
import HomeDisplay from './home_display';
import { fetchServer } from '../../../actions/server_actions';

const mSTP = state => {
  return {
    servers: state.entities.servers,
  }
};

const mDTP = dispatch => ({
  getServer: serverId => dispatch(fetchServer(serverId)),
});

export default connect(mSTP, mDTP)(HomeDisplay)