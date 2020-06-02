import { connect } from 'react-redux';
import CreateChannelForm from './create_channel_form';
import { createChannel } from '../../../../actions/channel_actions';

const mSTP = (state, ownProps) => {
  return {
    serverId: ownProps.serverId,
    errors: state.errors.session,
  }
};

const mDTP = dispatch => ({
  createChannel: channel => dispatch(createChannel(channel))
});

export default connect(mSTP, mDTP)(CreateChannelForm);