import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import { updateMessage } from '../../../../actions/channel_chat_actions';
import UpdateMessageForm from './update_message_form';

const mSTP = (state) => {
  return {
    currentUser: state.entities.users[state.session.id],
  }
};

const mDTP = dispatch => ({
  updateMessage: message => dispatch(updateMessage(message)),
});

export default withRouter(connect(mSTP, mDTP)(UpdateMessageForm));