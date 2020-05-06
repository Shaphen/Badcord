import React from 'react';
import ReactDOM from 'react-dom';
import configureStore from './store/store'
import Root from './components/root';
import { selectMembersByServer } from './reducers/selectors';
import Modal from 'react-modal';

// test code
import { deleteChannel, fetchChannel, fetchChannels, createChannel } from './actions/channel_actions';
//end

document.addEventListener("DOMContentLoaded", () => {
  Modal.setAppElement('#root');

  let store;
  if (window.currentUser) {
    const preloadedState = {
      entities: {
        users: { [window.currentUser.id]: window.currentUser }
      },
      session: { id: window.currentUser.id }
    };
    store = configureStore(preloadedState);
  } else {
    store = configureStore();
  }

  const root = document.getElementById('root');
  ReactDOM.render(<Root store={ store } />, root)

  // test code
  window.getState = store.getState;
  window.dispatch = store.dispatch;
  window.selectMembersByServer = selectMembersByServer; //for future creating members list for servers
  window.fetchChannels = fetchChannels;
  window.fetchChannel = fetchChannel;
  window.createChannel = createChannel;
  window.deleteChannel = deleteChannel;
  // end
});
