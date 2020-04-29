import { connect } from 'react-redux';
import Session from './session';
import { signup } from '../../actions/session_actions'

const mSTP = state => {
  // debugger
  return {
    errors: state.errors,
    formType: 'Create an account'
  }
};

const mDTP = dispatch => ({
  processEntry: user => dispatch(signup(user))
});

export default connect(mSTP, mDTP)(Session);