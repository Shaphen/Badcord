import { connect } from 'react-redux';
import { joinServer } from '../../../../actions/server_actions'
import { withRouter } from 'react-router-dom'
import ServerJoinForm from './server_join_form';

const mSTP = state => ({
  currentUser: state.entities.users[state.session.id],
  errors: state.errors.session
});

const mDTP = dispatch => ({
  joinServer: inviteCode => dispatch(joinServer(inviteCode))
});

export default withRouter(connect(mSTP, mDTP)(ServerJoinForm));