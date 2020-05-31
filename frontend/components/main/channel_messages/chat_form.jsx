import React from 'react';

class ChatForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      body: "",
      authorId: this.props.authorId,
      channelId: null
    }
    this.handleSubmit = this.handleSubmit.bind(this);
  }
  
  componentDidUpdate(prevProps) {
    if (this.props.channel !== prevProps.channel) {
      this.setState({ channelId: this.props.channel.id })
    }
  }

  handleChange(type){
    return e => {
      this.setState({ [type]: e.currentTarget.value });
    }
  }

  handleSubmit(e) {
    e.preventDefault();
    App.cable.subscriptions.subscriptions[0].speak({
      message: this.state.body,
      authorId: this.state.authorId,
      channelId: this.state.channelId
    });
    this.setState({ body: "" });
  }
  
  render() {
    return (
      <div id="chat-form">
        <form onSubmit={this.handleSubmit}>
          <input
            type="text"
            onChange={this.handleChange('body')}
            value={this.state.body}
            id="channel-chat-new-message-box"
            placeholder="Message channel"
            autoComplete="off"
          />
          <input type="submit" id="submit-message" />
        </form>
      </div>
    )
  }
}

export default ChatForm;