import * as ApiUtil from '../util/server_api_util';

export const RECEIVE_ALL_SERVERS = "RECEIVE_ALL_SERVERS";
export const RECEIVE_SERVER = "RECEIVE_SERVER";
export const REMOVE_SERVER = "REMOVE_SERVER";
export const RECEIVE_SERVER_ERRORS = "RECEIVE_SERVER_ERRORS";

const receiveAllServers = servers => ({
  type: RECEIVE_ALL_SERVERS,
  servers
});

const receiveServer = server => ({
  type: RECEIVE_SERVER,
  server
});

const removeServer = serverId => ({
  type: REMOVE_SERVER,
  serverId
});

export const receiveServerErrors = errors => ({
  type: RECEIVE_SERVER_ERRORS,
  errors
});

export const fetchServers = () => dispatch => ApiUtil.fetchServers()
  .then(servers => dispatch(receiveAllServers(servers)));

export const fetchServer = serverId => dispatch => ApiUtil.fetchServer(serverId)
  .then(server => dispatch(receiveServer(server)));

export const createServer = server => dispatch => ApiUtil.createServer(server)
  .then(server => dispatch(receiveServer(server)), err => (
    dispatch(receiveServerErrors(err.responseJSON))
  ));

export const udpateServer = server => dispatch => ApiUtil.updateServer(server)
  .then(server => dispatch(receiveServer(server)), err => (
    dispatch(receiveServerErrors(err.responseJSON))
  ));

export const deleteServer = serverId => dispatch => ApiUtil.deleteServer(serverId)
  .then(() => dispatch(removeServer(serverId)));
  