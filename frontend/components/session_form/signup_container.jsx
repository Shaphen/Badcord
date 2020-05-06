import { connect } from 'react-redux';
import Session from './session';
import { login, signup, receiveErrors } from '../../actions/session_actions'

const mSTP = state => {
  // debugger
  return {
    errors: state.errors.session,
    formType: 'Create an account'
  }
};

const mDTP = dispatch => ({
  demoLogin: demo => dispatch(login(demo)),
  processEntry: user => dispatch(signup(user)),
  clearErrors: () => dispatch(receiveErrors([]))
});

export default connect(mSTP, mDTP)(Session);