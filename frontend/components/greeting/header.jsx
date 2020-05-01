import React from 'react';
import { Link } from 'react-router-dom'
import { AiFillGithub }from 'react-icons/ai';
import { AiOutlineLinkedin } from 'react-icons/ai'
import { Redirect } from 'react-redux'


export default ({ currentUser, logout }) => {

  const display = currentUser ? (
    <div className="greeting-container">
      {/* Redirect */}
      {/* <p className="greeting-login-state">Logged in as: {currentUser.username} (temp. confirmation)</p> */}
      <button className="logout-button" onClick={logout}>LOGOUT</button>
    </div>
  ) : (
    <div className="header-box">
      <div className="header-logo-side">
        <img className="logo-white" src={window.mono_white_logo} />
      </div>
      <div className="login-box-side">
        <a className="linkedin-icon" href="https://www.linkedin.com/in/shaphen-pangburn-a27817151/" target="_blank">
            <AiOutlineLinkedin fill="white" size={22} />
        </a>
        <a className="github-icon" href="https://github.com/Shaphen/Badcord/wiki" target="_blank">
          <AiFillGithub fill="white" size={22} />
        </a>
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