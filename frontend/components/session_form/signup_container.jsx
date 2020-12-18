import { connect } from 'react-redux';
import Session from './session';
import { signup, receiveErrors } from '../../actions/session_actions';
import { generateRandEmail, generateRandUsername, generateRandPassword } from "../../reducers/selectors";

const mSTP = state => {
  return {
    generateUsername: generateRandUsername(),
    generatePassword: generateRandPassword(),
    generateEmail: generateRandEmail(),
    errors: state.errors.session,
    formType: 'Create an account'
  }
};

const mDTP = dispatch => ({
  demoLogin: demo => dispatch(signup(demo)),
  processEntry: user => dispatch(signup(user)),
  clearErrors: () => dispatch(receiveErrors([])),
});

export default connect(mSTP, mDTP)(Session);