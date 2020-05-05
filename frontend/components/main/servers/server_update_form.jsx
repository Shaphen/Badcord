import React from 'react';

class ServerUpdateForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      name: "",
      owner_id: 0,
    }
  }

  componentDidMount() {
    this.setState({ name: this.props.server.name })
    this.setState({ owner_id: this.props.currentUser.id })
  }

  handleSubmit(e) {
    e.preventDefault();
    const server = Object.assign({}, this.state)
    this.props.action(formData).then(() => this.props.closeModal())
  }

  handleChange(type) {
    return e => {
      this.setState({ [type]: e.target.value })
    }
  }

  render() {
    return (
      <div id="server-form-container">
        <div id="new-server-description">
          <p>Edit server name here</p>
        </div>
        <form onSubmit={this.handleSubmit}>
          <div id="server-name-container">
            <label id="server-name-title">SERVER NAME</label>
            <input id="server-name-input" type="text" onChange={this.handleChange('name')} value={this.state.name} />
          </div>
          <button id="create-server-button" value={this.props.formType}>Update</button>
        </form>
      </div>
    )
  }
}

export default ServerUpdateForm;