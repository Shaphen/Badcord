import { connect } from 'react-redux';
import Session from './session';
import { signup, login, receiveErrors } from '../../actions/session_actions'
import { generateRandEmail, generateRandUsername, generateRandPassword } from "../../reducers/selectors";

const mSTP = state => {
  return {
    generateUsername: generateRandUsername(),
    generatePassword: generateRandPassword(),
    generateEmail: generateRandEmail(),
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