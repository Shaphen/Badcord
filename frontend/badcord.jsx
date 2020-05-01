import React from 'react';
import ReactDOM from 'react-dom';
import configureStore from './store/store'
import Root from './components/root';

// test code
import { login, signup } from './actions/session_actions';
import { fetchServers, fetchServer, createServer, updateServer } from './util/server_api_util';
//end

document.addEventListener("DOMContentLoaded", () => {
  // const store = configureStore();
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
  window.login = login;
  window.signup = signup;
  window.fetchServers = fetchServers
  window.fetchServer = fetchServer;
  window.createServer = createServer;
  window.updateServer = updateServer;
  // end
});
