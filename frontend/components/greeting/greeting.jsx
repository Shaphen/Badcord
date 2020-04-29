import React from 'react';
import { Link } from 'react-router-dom'

export default ({ currentUser, logout }) => {
  
  const display = currentUser ? (
    <div className="greeting-container">
      <p className="greeting-login-state">Logged in as: { currentUser.username }</p>
      <button className="logout-button" onClick={ logout }>LOGOUT</button>
    </div>
  ) : (
    <div className="signup-login">
        <Link to="/signup" className="signup-button">Sign Up</Link>
        <Link to="/login" className="login-button">Log In</Link>
    </div>
  )

  return (
    <div>
      { display }
    </div>
  )
}
