import React from 'react';
import ReactDOM from 'react-dom';
import configureStore from './store/store'
import Root from './components/root';

// test code
import { login, signup } from './actions/session_actions';
//end

document.addEventListener("DOMContentLoaded", () => {
  const store = configureStore();
  const root = document.getElementById('root');
  ReactDOM.render(<Root store={ store } />, root)

  // test code
  window.getState = store.getState;
  window.dispatch = store.dispatch;
  window.login = login;
  window.signup = signup;
  // end
});
