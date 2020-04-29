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

  handleChange(type) {
    return e => {
      this.setState({[type]: e.target.value})
    }
  }

  render() {
    if (this.props.errors) {
      let errors = this.props.errors
    }
    const address = this.props.formType === 'Welcome Back!' ? '/signup' : '/login'
    const name = this.props.formType === 'Welcome Back!' ? 'sign up' : 'login'
    return (
      <div className="session">
        <h1 className="form-type">{ this.props.formType }</h1>
        <Link to={ address } className="other-form" >{ name }</Link>
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
          <button value={this.props.formType}>Submit</button>
        </form>
      </div>
    )
  }
}

export default Session;