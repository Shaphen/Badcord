import React from 'react';
import { Link } from 'react-router-dom'

class Session extends React.Component {
  constructor(props) {
    super (props)
    this.state = {
      username: "",
      password: "",
      email: ""
    }
    this.handleSubmit = this.handleSubmit.bind(this)
  }

  handleSubmit(e) {
    e.preventDefault();
    const user = Object.assign({}, this.state);
    this.props.processEntry(user)
  }

  renderErrors() {
    return (
      <ul>
        {this.props.errors.map((error, i) => (
          <li className="errors" key={`error-${i}`}>
            {error}
          </li>
        ))}
      </ul>
    );
  }
  
  handleChange(type) {
    return e => {
      this.setState({[type]: e.target.value})
    }
  }

  render() {
    const address = this.props.formType === 'Welcome Back!' ? '/signup' : '/login'
    const name = this.props.formType === 'Welcome Back!' ? 'sign up' : 'login'
    return (
      <div className="login-signup-background">
        <img className="login-signup-bg-img" src={window.login_signup_bg}/>
        <img className="login-signup-bg-logo" src={window.mono_logo} />
        <div className="session">
          <Link to="/" className="login-signup-go-back">X</Link>
          <h1 className="form-type">{ this.props.formType }</h1>
          {this.renderErrors()}
          <form className="login-signup-form" onSubmit={ this.handleSubmit }>
            <label className="username">
              <p>USERNAME</p>
              <input type="text" value={this.state.username} onChange={this.handleChange('username')} />
            </label>
            {
              this.props.formType === 'Create an account' ? <label className="email">EMAIL</label>: ''
            }
            {
              this.props.formType === 'Create an account' ? <input type="email" className="email-box" value={this.state.email} onChange={this.handleChange('email')}/> : ''
            }
            <label className="password">
              <p>PASSWORD</p>
              <input type="password" value={this.state.password} onChange={this.handleChange('password')} />
            </label>
            <button className="session-submit-button" value={this.props.formType}>Submit</button>
            <Link to={address} className="other-form" >{name}</Link>
          </form>
        </div>
      </div>
    )
  }
}

export default Session;