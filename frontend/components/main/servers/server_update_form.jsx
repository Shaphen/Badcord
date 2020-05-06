import React from 'react';

class ServerUpdateForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      id: this.props.serverId,
      name: this.props.server.name,
    }
    this.handleSubmit = this.handleSubmit.bind(this)
  }

  handleSubmit(e) {
    e.preventDefault();
    const server = Object.assign({}, this.state)
    this.props.updateServer(server)
      .then(() => this.props.closeModal(e))
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
          <button id="create-server-button2" value={this.props.formType}>Update</button>
        </form>
      </div>
    )
  }
}

export default ServerUpdateForm;