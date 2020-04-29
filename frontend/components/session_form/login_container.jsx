import { connect } from 'react-redux';
import Session from './session';
import { login } from '../../actions/session_actions'

const mSTP = state => {
  // debugger
  return {
    errors: state.errors.session,
    formType: 'Welcome Back!'
  }
};

const mDTP = dispatch => ({
  processEntry: user => dispatch(login(user))
});

export default connect(mSTP, mDTP)(Session);