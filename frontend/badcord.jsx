import React from 'react';
import ReactDOM from 'react-dom';
import configureStore from './store/store'
import Root from './components/root';

// test code
// import { signupUser, loginUser, logoutUser } from './util/session_api_util';
//end

document.addEventListener("DOMContentLoaded", () => {
  const store = configureStore();
  const root = document.getElementById('root');
  ReactDOM.render(<Root store={ store } />, root)

  // test code
  // window.signup = signupUser;
  // window.login = loginUser;
  // window.logout = logoutUser;
  window.getState = store.getState;
  window.dispatch = store.dispatch;
  // end
});
