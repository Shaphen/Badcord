import React from 'react'

class UpdateMessageForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      body: props.message.body
    }
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleSubmit() {
    const message = {
      body: this.state.body,
      author_id: this.props.message.author_id,
      channel_id: this.props.message.channel_id
    }
    this.props.updateMessage(message)
  }

  handleChange(type) {
    return e => {
      this.setState({ [type]: e.target.value })
    }
  }
  
  render() {
    return (
      <div>
        <div id="update-message-header">
          <p id="update-message-text-main">EDIT MESSAGE</p>
        </div>
        <form onSubmit={this.handleSubmit}>
          <div id="update-message-box">
            <label id="update-message-text">CHANNEL MESSAGE</label>
            <input id="update-message-input" type="text" onChange={this.handleChange('body')} value={this.state.body} />
          </div>
          <div id="update-message-footer">
            <label id="update-message-cancel" onClick={this.props.closeModal}>Cancel</label>
            <button id="update-message-submit">Update Message</button>
          </div>
        </form>
      </div>
    )
  }
}

export default UpdateMessageForm;