import { fetchChatMessages, updateChatMessage, deleteChatMessage, createChatMessage } from '../util/channel_chat_api_util';
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

export const RECEIVE_ALL_MESSAGES = 'RECEIVE_ALL_MESSAGES';
export const RECEIVE_MESSAGE = 'RECEIVE_MESSAGE';
export const REMOVE_MESSAGE = 'REMOVE_MESSAGE';
export const RECEIVE_ERRORS = 'RECEIVE_ERRORS';

const receiveAllMessages = messages => ({
  type: RECEIVE_ALL_MESSAGES,
  messages
});

const receiveMessage = message => ({
  type: RECEIVE_MESSAGE,
  message
});

const removeMessage = messageId => ({
  type: REMOVE_MESSAGE,
  messageId
});

const receiveMessageErrors = errors => ({
  type: RECEIVE_ERRORS,
  errors
});

const notifyError = message => {
  toast.error(message);
}

export const fetchMessages = () => dispatch => fetchChatMessages()
  .then(messages => dispatch(receiveAllMessages(messages)), err => {
    err.responseJSON.map(error => {
      return notifyError(error);
    });
    dispatch(receiveMessageErrors(err.responseJSON));
  });

export const createMessage = message => createChatMessage(message)
  .then(message => dispatch(receiveMessage(message)), err => {
    err.responseJSON.map(error => {
      return notifyError(error);
    });
  });

export const updateMessage = message => dispatch => updateChatMessage(message)
  .then(message => dispatch(receiveMessage(message)), err => {
    err.responseJSON.map(error => {
      return notifyError(error);
    });
  });

export const deleteMessage = messageId => dispatch => deleteChatMessage(messageId)
  .then(() => dispatch(removeMessage(messageId)), err => {
    err.responseJSON.map(error => {
      return notifyError(error);
    });
  });