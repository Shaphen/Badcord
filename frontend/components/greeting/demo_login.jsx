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
      username: "shaphen",
      password: "password"
    }
    this.props.login(user)
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