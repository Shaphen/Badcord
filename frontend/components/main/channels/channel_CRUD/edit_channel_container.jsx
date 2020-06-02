import { connect } from 'react-redux';
import EditChannelForm from './edit_channel_form';
import { updateChannel } from '../../../../actions/channel_actions';

const mSTP = (state, ownProps) => {
  return {
    channelId: ownProps.channelId,
    errors: state.errors.session
  }
};

const mDTP = dispatch => ({
  updateChannel: channel => dispatch(updateChannel(channel))
});

export default connect(mSTP, mDTP)(EditChannelForm);