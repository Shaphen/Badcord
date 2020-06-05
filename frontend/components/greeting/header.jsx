import React from 'react';
import { AiFillGithub }from 'react-icons/ai';
import DemoLoginContainer from '../greeting/demo_login_container';
import { AiOutlineLinkedin } from 'react-icons/ai'
import { Redirect, Link } from 'react-router-dom'


export default ({ currentUser, logout }) => {

  const display = currentUser ? (
    <div className="greeting-container">
      <Redirect to="/channels/@me" />
      <button className="logout-button" onClick={logout}>LOGOUT</button>
    </div>
  ) : (
    <div className="header-box">
      <div className="header-logo-side">
        <img className="logo-white" src={window.mono_white_logo} />
      </div>
      <div className="login-box-side">
        <a className="linkedin-icon" href="https://www.linkedin.com/in/shaphen/" target="_blank">
            <AiOutlineLinkedin fill="white" size={22} />
        </a>
        <a className="github-icon" href="https://github.com/Shaphen/Badcord/" target="_blank">
          <AiFillGithub fill="white" size={22} />
        </a>
        <Link to="/login" className="header-login-button">Log In</Link>
      </div>
    </div>
    )

  return (
    <div className="header">
      {display}
      <header className="splash-header">
        <h3>The same way to chat with your communities and friends</h3>
        <p>Badcord is the second easiest way to communicate over only text (because the others are too much work), whether you’re part of a mob, a nightly robber group, a worldwide assassins guild, or just a handful of friends that want to atack things.</p>
        <DemoLoginContainer />
      </header>
    </div>
  )
}