import React from 'react';
import { Link } from 'react-router-dom'
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

toast.configure();
class Session extends React.Component {
  constructor(props) {
    super (props)
    this.state = {
      username: "",
      password: "",
      email: ""
    }
    this.handleSubmit = this.handleSubmit.bind(this)
    this.demoLogin = this.demoLogin.bind(this)
  }

  componentWillUnmount() {
    this.props.clearErrors();
  }

  handleSubmit(e) {
    e.preventDefault();
    const user = Object.assign({}, this.state);
    this.props.processEntry(user)
      .then(({type}) => {
        if (type !== "RECEIVE_ERRORS") {
          this.props.history.push("/channels/@me")
        }
      })
  }

  demoLogin(e) {
    e.preventDefault();
    const user = {
      username: "masterchef",
      password: "password"
    }
    if (this.props.formType === 'Welcome Back!') {
      this.props.processEntry(user).then(() => this.props.history.push("/channels/@me"))
    } else {
      this.props.demoLogin(user).then(() => this.props.history.push("/channels/@me"))
    }
  }
  
  handleChange(type) {
    return e => {
      this.setState({[type]: e.target.value})
    }
  }

  render() {
    const address = this.props.formType === 'Welcome Back!' ? '/signup' : '/login'
    const name = this.props.formType === 'Welcome Back!' ? 'Register' : 'Already have an account?'
    return (
      <div className="login-signup-background">
        <ToastContainer id="toast" position="top-center" />
        <img className="login-signup-bg-img" src={window.login_signup_bg} />
        <img className="login-signup-bg-logo" src={window.mono_logo} />
        <div id="session">
          <Link to="/" className="login-signup-go-back">
            X
          </Link>
          <div id="form-box">
            <h1 className="form-type">{this.props.formType}</h1>
            <form className="login-signup-form" onSubmit={this.handleSubmit}>
              <label className="username">
                <p>USERNAME</p>
                <input
                  type="text"
                  value={this.state.username}
                  onChange={this.handleChange("username")}
                />
              </label>
              {this.props.formType === "Create an account" ? (
                <label id="email">EMAIL</label>
              ) : (
                ""
              )}
              {this.props.formType === "Create an account" ? (
                <input
                  type="email"
                  className="email-box"
                  value={this.state.email}
                  onChange={this.handleChange("email")}
                />
              ) : (
                ""
              )}
              <label className="password">
                <p>PASSWORD</p>
                <input
                  type="password"
                  value={this.state.password}
                  onChange={this.handleChange("password")}
                />
              </label>
              <button
                className="session-submit-button"
                value={this.props.formType}
              >
                Submit
              </button>
              <button onClick={(e) => this.demoLogin(e)} className="demo-login">
                Demo Login
              </button>
              {this.props.formType === "Welcome Back!" ? (
                <label id="other-form-text">Need an account?</label>
              ) : (
                ""
              )}
              <Link to={address} className="other-form">
                {name}
              </Link>
            </form>
          </div>
          <div id="qr-box">
            <img className="linkedin-qr" src={window.linkedin_qr} />
            <p id="qr-title">This is a QR Code</p>
            <p id="qr-note">Scan to go somewhere even better than here</p>
          </div>
          <div id="errors-box">
            {/* { this.props.errors.length ? this.renderErrors() : null } */}
          </div>
        </div>
      </div>
    );
  }
}

export default Session;