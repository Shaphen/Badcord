import { connect } from 'react-redux';
import { joinServer } from '../../../../actions/server_actions'
import ServerJoinForm from './server_join_form';

const mSTP = state => ({
  currentUser: state.entities.users[state.session.id],
  errors: state.errors.session
});

const mDTP = dispatch => ({
  joinServer: inviteCode => dispatch(joinServer(inviteCode))
});

export default connect(mSTP, mDTP)(ServerJoinForm);