import { connect } from 'react-redux';
import ServerCreateForm from './server_create_form';
import { withRouter } from 'react-router-dom'
import { createServer } from '../../../../actions/server_actions';

const mSTP = state => {
  return {
    currentUser: state.entities.users[state.session.id],
    errors: state.errors.session,
    formType: "Greed is Good",
    servers: state.entities.servers
  }
};

const mDTP = dispatch => ({
  createServer: server => dispatch(createServer(server))
});

export default withRouter(connect(mSTP, mDTP)(ServerCreateForm));