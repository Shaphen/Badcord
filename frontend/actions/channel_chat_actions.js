import { fetchChatMessages } from '../util/channel_chat_api_util';
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

export const RECEIVE_ALL_MESSAGES = 'RECEIVE_ALL_MESSAGES';
export const RECEIVE_ERRORS = 'RECEIVE_ERRORS';

const receiveAllMessages = messages => ({
  type: RECEIVE_ALL_MESSAGES,
  messages
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
