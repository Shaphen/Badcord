import { connect } from 'react-redux';
import Header from './header';
import { logout } from '../../actions/session_actions';
import { login } from '../../actions/session_actions';

const mSTP = state => {
  return {
    currentUser: state.entities.users[state.session.id]
  }
};

const mDTP = dispatch => ({
  logout: () => dispatch(logout()),
  login: user => dispatch(login(user))
});

export default connect(mSTP, mDTP)(Header);