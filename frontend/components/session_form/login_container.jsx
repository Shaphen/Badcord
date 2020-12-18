import { connect } from 'react-redux';
import Session from './session';
import { login, receiveErrors } from '../../actions/session_actions'

const mSTP = state => {
  return {
    errors: state.errors.session,
    formType: 'Welcome Back!'
  }
};

const mDTP = dispatch => ({
  demoLogin: demo => dispatch(signup(demo)),
  processEntry: user => dispatch(login(user)),
  clearErrors: () => dispatch(receiveErrors([]))
});

export default connect(mSTP, mDTP)(Session);