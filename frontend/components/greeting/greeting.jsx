import React from 'react';
import { Link } from 'react-router-dom'

export default ({ currentUser, logout }) => {
  
  const display = currentUser ? (
    <div className="greeting-container">
    </div>
  ) : (
    <div className="signup-login">
        <Link to="/signup" className="signup-button">Sign Up</Link>
        <Link to="/login" className="login-button">Log In</Link>
    </div>
  )

  return (
    <div className="signup-login-box">
      { display }
    </div>
  )
}
