import React from 'react'

class UpdateMessageForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      body: ""
    }
  }

  handleSubmit() {
    message = {
      body: this.state.body,
      author_id: this.props.authorId,
      channel_id: this.props.channelId
    }
    this.props.updateMessage(message)
  }

  
  render() {
    debugger
    let message
    if (this.props.messageList.id === this.props.messageId) {
      message = this.props.messageList
    }
    return (
      <div>
        { message ? message.body : "bleh" }
      </div>
    )
  }
}

export default UpdateMessageForm;