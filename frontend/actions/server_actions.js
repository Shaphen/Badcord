import * as ApiUtil from '../util/server_api_util';
import { toast } from 'react-toastify';
import "react-toastify/dist/ReactToastify.css";

export const RECEIVE_ALL_SERVERS = "RECEIVE_ALL_SERVERS";
export const RECEIVE_SERVER = "RECEIVE_SERVER";
export const REMOVE_SERVER = "REMOVE_SERVER";
export const RECEIVE_SERVER_ERRORS = "RECEIVE_SERVER_ERRORS";
export const CLEAR_SERVER_ERRORS = "CLEAR_SERVER_ERRORS";

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

const notifyError = message => {
  toast.error(message);
}

export const clearServerErrors = () => ({
  type: CLEAR_SERVER_ERRORS
});

export const fetchServers = () => dispatch => ApiUtil.fetchServers()
  .then(servers => dispatch(receiveAllServers(servers)));

export const fetchServer = serverId => dispatch => ApiUtil.fetchServer(serverId)
  .then(server => dispatch(receiveServer(server)));

export const createServer = server => dispatch => ApiUtil.createServer(server)
  .then(server => dispatch(receiveServer(server)), err => {
    err.responseJSON.map(error => {
      return notifyError(error);
    });
    dispatch(receiveServerErrors(err.responseJSON))
  });
  
export const updateServer = server => dispatch => ApiUtil.updateServer(server)
  .then(server => dispatch(receiveServer(server)), err => {
    err.responseJSON.map(error => {
      return notifyError(error);
    });
    dispatch(receiveServerErrors(err.responseJSON))
  });

export const joinServer = inviteCode => dispatch => ApiUtil.joinServers(inviteCode)
  .then((server) => dispatch(receiveServer(server)), err => {
    err.responseJSON.map(error => {
      return notifyError(error);
    });
    dispatch(receiveServerErrors(err.responseJSON))
  });

export const leaveServer = serverId => dispatch => ApiUtil.leaveServers(serverId)
  .then(server => dispatch(receiveServer(server)), err => {
    err.responseJSON.map(error => {
      return notifyError(error);
    });
    dispatch(receiveServerErrors(err.responseJSON))
  });
    
export const deleteServer = serverId => dispatch => (
  ApiUtil.deleteServer(serverId)
  .then(() => dispatch(removeServer(serverId)), err => {
    err.responseJSON.map(error => {
      return notifyError(error)
    });
  }))
