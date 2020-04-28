import React from 'react';

class Session extends React.Component {
  constructor(props) {
    super (props)
    this.state = {
      username: "",
      password: ""
    }
    this.handleSubmit = this.handleSubmit.bind(this)
  }

  handleSubmit(e) {
    e.preventDefault();
    user = Object.assign({}, this.state);
    this.props.processEntry(user).then(data => console.log(data))
  }

  handlChange(type) {
    return e => {
      this.setState({[type]: e.target.value})
    }
  }

  render() {
    if (this.props.errors) {
      let errors = this.props.errors
    }
    const address = this.props.formType === 'login' ? '/login' : '/signup'
    const name = this.props.formType === 'login' ? 'signup' : 'login'
    return (
      <div>
        <Link to={ address }>{ name }</Link>
        <ul>
          {
            errors.map(error => (
              <li>{ error }</li>
            ))
          }
        </ul>
        <h1>{ this.props.formType }</h1>
        <form onSubmit={ this.handleSubmit }>
          <label>Username:
            <input type="text" value={this.state.username} onChange={this.handleChange('username')} />
          </label>
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