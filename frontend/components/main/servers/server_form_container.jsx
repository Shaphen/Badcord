import { connect } from 'react-redux';
import ServerForm from './server_form';
import { createServer } from '../../../actions/server_actions';

const mSTP = state => {
  return {
    currentUser: state.entities.users[state.session.id],
    errors: state.errors.session,
    formType: "Greed is Good"
  }
};

const mDTP = dispatch => ({
  createServer: server => dispatch(createServer(server))
});

export default connect(mSTP, mDTP)(ServerForm);