import React from 'react';
import { Link } from 'react-router-dom'
import { AiFillGithub }from 'react-icons/ai';
import { AiOutlineLinkedin } from 'react-icons/ai'


class Header extends React.Component {
  constructor(props) {
    super(props)
    this.demoLogin = this.demoLogin.bind(this);
  }
  
  demoLogin(e) {
    e.preventDefault();
    const user = {
      username: "shaphen",
      password: "password"
    }
    this.props.login(user)
  }
  
  render() {
    const display = this.props.currentUser ? (
      <div className="greeting-container">
        <p className="greeting-login-state">Logged in as: {this.props.currentUser.username} (temp. confirmation)</p>
        <button className="logout-button" onClick={this.props.logout}>LOGOUT</button>
      </div>
    ) : (
      <div className="header-box">
        <div className="header-logo-side">
          <img className="logo-white" src={window.mono_white_logo} />
        </div>
        <div className="login-box-side">
          <a className="linkedin-icon" href="https://www.linkedin.com/in/shaphen-pangburn-a27817151/" target="_blank">
              <AiOutlineLinkedin fill="white" size={20} />
          </a>
          <a className="github-icon" href="https://github.com/Shaphen/Badcord/wiki" target="_blank">
            <AiFillGithub fill="white" size={20} />
          </a>
          <button className="demo-login" onClick={(e) => this.demoLogin(e)}>Demo Login</button>
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

}

export default Header;