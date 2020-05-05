import { connect } from 'react-redux';
import ServerUpdateForm from './server_update_form';
import { updateServer } from '../../../actions/server_actions';

const mSTP = (state, ownProps) => {
  return {
    currentUser: state.entities.users[state.session.id],
    servers: ownProps.server,
    errors: state.errors.session,
    formType: "Picky Villans Come Ahead"
  }
};

const mDTP = dispatch => ({
  action: server => dispatch(updateServer(server))
});

export default connect(mSTP, mDTP)(ServerUpdateForm);