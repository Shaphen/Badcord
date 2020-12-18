import React from 'react';
import { Link } from 'react-router-dom'

class DemoLogin extends React.Component {
  constructor(props) {
    super(props)
    this.demoLogin = this.demoLogin.bind(this);
  }

  demoLogin(e) {
    e.preventDefault();
    const user = {
      username: this.props.generateUsername,
      password: this.props.generatePassword,
      email: this.props.generateEmail
    }
    
    this.props.demoLogin(user)
      .then(() => this.props.history.push("/channels/@me"))
  }

  render() {
    return (
      <div className="demo-login-box">
        <button className="demo-login-splash" onClick={(e) => this.demoLogin(e)}>Demo Login</button>
      </div>
    )
  }

}

export default DemoLogin;