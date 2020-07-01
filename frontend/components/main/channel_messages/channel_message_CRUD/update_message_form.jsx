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
    let message
    if (this.props.message) {
      message = this.props.message
    }
    return (
      <div>
        { message ? message.body : "bleh" }
      </div>
    )
  }
}

export default UpdateMessageForm;