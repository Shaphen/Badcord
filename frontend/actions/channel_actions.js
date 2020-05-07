import * as ApiUtil from '../util/channel_api_util';

export const RECEIVE_ALL_CHANNELS = 'RECEIVE_ALL_CHANNELS';
export const RECEIVE_CHANNEL = 'RECEIVE_CHANNEL';
export const REMOVE_CHANNEL = 'REMOVE_CHANNEL';
export const RECEIVE_CHANNEL_ERRORS = 'RECEIVE_CHANNEL_ERRORS';
export const CLEAR_CHANNEL_ERRORS = 'CLEAR_CHANNEL_ERRORS';

const receiveAllChannels = channels => ({
  type: RECEIVE_ALL_CHANNELS,
  channels
});

const receiveChannel = channel => ({
  type: RECEIVE_CHANNEL,
  channel
});

const removeChannel = channelId => ({
  type: REMOVE_CHANNEL,
  channelId
});

export const receiveChannelErrors = errors => ({
  type: RECEIVE_CHANNEL_ERRORS,
  errors
});

export const clearChannelErrors = () => ({
  type: CLEAR_CHANNEL_ERRORS
});

export const fetchChannels = serverId => dispatch => ApiUtil.fetchChannels(serverId)
  .then(channels => dispatch(receiveAllChannels(channels)));

export const fetchChannel = channelId => dispatch => ApiUtil.fetchChannel(channelId)
  .then(channel => dispatch(receiveChannel(channel)), err => console.log(err));

export const createChannel = channel => dispatch => ApiUtil.createChannel(channel)
  .then(channel => dispatch(receiveChannel(channel)), err => console.log(err));

export const updateChannel = channel => dispatch => ApiUtil.updateChannel(channel)
  .then(channel => dispatch(receiveChannel(channel)));

export const deleteChannel = channelId => dispatch => ApiUtil.deleteChannel(channelId)
  .then(() => dispatch(removeChannel(channelId)));
