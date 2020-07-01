import React from 'react'

class UpdateMessageForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      body: props.message.body
    }
    debugger
  }

  handleSubmit() {
    message = {
      body: this.state.body,
      author_id: this.props.authorId,
      channel_id: this.props.channelId
    }
    this.props.updateMessage(message)
  }

  handleChange(type) {
    return e => {
      this.setState({ [type]: e.target.value })
    }
  }
  
  render() {
    let message
    if (this.props.message) {
      message = this.props.message
    }
    return (
      <div>
        <div id="create-channel-header">
          <p id="update-channel-text-main">EDIT MESSAGE</p>
        </div>
        <form onSubmit={this.handleSubmit}>
          <div id="update-channel-name-box">
            <label id="create-channel-text">CHANNEL MESSAGE</label>
            <input id="create-channel-input" type="text" onChange={this.handleChange('body')} value={this.state.body} />
          </div>
          <div id="update-channel-footer">
            <label id="create-channel-cancel" onClick={this.props.closeModal}>Cancel</label>
            <button id="create-channel-submit">Update Message</button>
          </div>
        </form>
      </div>
    )
  }
}

export default UpdateMessageForm;