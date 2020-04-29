import React from 'react';
import { Link } from 'react-router-dom'

export default ({ currentUser, logout }) => {

  const display = currentUser ? (
    <div className="greeting-container">
      <p className="greeting-login-state">Logged in as: {currentUser.username}</p>
      <button className="logout-button" onClick={logout}>LOGOUT</button>
    </div>
  ) : (
    <div className="header-box">
      <div className="header-logo-side">
        <img className="logo-white" src={window.mono_white_logo} />
      </div>
      <div className="login-box-side">
        <Link to="/login" className="header-login-button">Log In</Link>
      </div>
    </div>
    )

  return (
    <div className="header">
      {display}
    </div>
  )
}