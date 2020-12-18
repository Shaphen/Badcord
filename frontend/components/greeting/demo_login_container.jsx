import { connect } from 'react-redux';
import DemoLogin from './demo_login';
import { signup } from '../../actions/session_actions';
import { generateRandEmail, generateRandUsername, generateRandPassword } from "../../reducers/selectors";

const mSTP = state => {
  return {
    generateUsername: generateRandUsername(),
    generatePassword: generateRandPassword(),
    generateEmail: generateRandEmail(),
    currentUser: state.entities.users[state.session.id]
  }
};

const mDTP = dispatch => ({
  demoLogin: demo => dispatch(signup(demo)),
});

export default connect(mSTP, mDTP)(DemoLogin);