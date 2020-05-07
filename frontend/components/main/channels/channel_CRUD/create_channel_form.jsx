import React from 'react';

class CreateChannelForm extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      name: "",
      serverId: this.props.serverId
    }
    this.handleSubmit = this.handleSubmit.bind(this)
  }

  handleSubmit(e) {
    e.preventDefault();
    const channel = Object.assign({}, this.state)
    this.props.createChannel(channel)
      .then(() => this.props.closeModal(e))
  }

  handleChange() {
    return e => {
      this.setState({ name: e.target.value })
    }
  }

  render() {
    return (
      <div>
        <div id="create-channel-header">
          <p id="create-channel-text-main">CREATE TEXT CHANNEL</p>
          <p id="create-channel-text-sub">in Text Channels</p>
        </div>
        <div>
          <form onSubmit={this.handleSubmit}>
            <div id="create-channel-name-box">
              <label id="create-channel-text">CHANNEL NAME</label>
              <input id="create-channel-input" type="text" onChange={this.handleChange} value={this.state.name} />
            </div>
            <div id="create-channel-footer">
              <label id="create-channel-cancel">Cancel</label>
              <button id="create-channel-submit">Create Channel</button>
            </div>
          </form>
        </div>
      </div>
    )
  }
}

export default CreateChannelForm;