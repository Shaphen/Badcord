import { connect } from 'react-redux';
import DemoLogin from './demo_login';
import { login } from '../../actions/session_actions';

const mSTP = state => {
  return {
    currentUser: state.entities.users[state.session.id]
  }
};

const mDTP = dispatch => ({
  login: user => dispatch(login(user))
});

export default connect(mSTP, mDTP)(DemoLogin);