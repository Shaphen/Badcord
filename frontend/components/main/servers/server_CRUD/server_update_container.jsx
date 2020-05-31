import { connect } from 'react-redux';
import ServerUpdateForm from './server_update_form';
import { updateServer } from '../../../../actions/server_actions';

const mSTP = (state, ownProps) => {
  return {
    serverId: ownProps.server.id,
    errors: state.errors.session,
    formType: "Picky Villans Come Ahead"
  }
};

const mDTP = dispatch => ({
  updateServer: server => dispatch(updateServer(server)),
});

export default connect(mSTP, mDTP)(ServerUpdateForm);