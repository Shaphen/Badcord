import React from 'react';

class ChatForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      body: "",
      authorId: null,
      channelId: null
    }
  }

  handleChange(type){
    return e => {
      this.setState({ [type]: e.currentTarget.value });
    }
  }

  handleSubmit(e) {
    e.preventDefault();
    App.cable.subscriptions.subscriptions[0].speak({ message: this.state.body });
    this.setState({ body: "" });
  }
  
  render() {
    return (
      <div>
        <input
          type="text"
          onChange={this.handleChange('body')}
          value={this.state.body}
          id="channel-chat-new-message-box"
          placeholder="Message channel"
        />
      </div>
    )
  }
}

export default ChatForm;