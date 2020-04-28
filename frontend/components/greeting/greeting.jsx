import React from 'react';
import { Link } from 'react-router-dom'

export default ({ currentUser, logout }) => {
  
  const display = currentUser ? (
    <div>
      <p className="greeting-login-state">Logged in as: { currentUser.username }</p>
      <button onClick={ logout }>Log Out</button>
    </div>
  ) : (
    <div className="signup-login">
        <Link to="/signup">Sign Up</Link>
        <Link to="/login">Log In</Link>
    </div>
  )

  return (
    <div>
      { display }
    </div>
  )
}
