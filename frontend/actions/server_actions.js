import * as ApiUtil from '../util/server_api_util';

export const RECEIVE_ALL_SERVERS = "RECEIVE_ALL_SERVERS";
export const RECEIVE_SERVER = "RECEIVE_SERVER";
export const REMOVE_SERVER = "REMOVE_SERVER";

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

export const fetchServers = () => dispatch => ApiUtil.fetchServers()
  .then(servers => dispatch(receiveAllServers(servers)))
