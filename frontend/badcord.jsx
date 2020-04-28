import React from 'react';
import ReactDOM from 'react-dom';

// test code
import { signup, login, logout } from './util/session_api_util';
//end

document.addEventListener("DOMContentLoaded", () => {
  // test code
  window.signup = signup;
  window.login = login;
  window.logout = logout;
  // end
  
  const root = document.getElementById('root');
  ReactDOM.render(<h1>Badcord</h1>, root)
});
