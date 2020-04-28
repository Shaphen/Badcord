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
    const address = this.props.formType === 'Login' ? '/signup' : '/login'
    const name = this.props.formType === 'Login' ? 'sign up' : 'login'
    return (
      <div>
        <Link to={ address }>{ name }</Link>
        
        <h1>{ this.props.formType }</h1>
        <form onSubmit={ this.handleSubmit }>
          <label>Username: 
            <input type="text" value={this.state.username} onChange={this.handleChange('username')} />
          </label>
          {
            this.props.formType === 'Sign Up' ? <label>Email: </label>: ''
          }
          {
            this.props.formType === 'Sign Up' ? <input type="email" value={this.state.email} onChange={this.handleChange('email')}/> : ''
          }
          <label>Password: 
            <input type="password" value={this.state.password} onChange={this.handleChange('password')} />
          </label>
          <button value={this.props.formType}>Submit</button>
        </form>
      </div>
    )
  }
}

export default Session;