import { connect } from 'react-redux';
import ServerForm from './server_form';
import { createServer } from '../../../actions/server_actions';

const mSTP = state => {
  return {
    errors: state.errors.session,
    formType: "So all the others weren't enough, huh?"
  }
};

const mDTP = dispatch => ({
  processEntry: server => dispatch(createServer(server))
});

export default connect(mSTP, mDTP)(ServerForm);