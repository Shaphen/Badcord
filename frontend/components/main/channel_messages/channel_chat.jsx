import React from 'react';
import ChatForm from './chat_form';
import { BsFillPersonLinesFill } from 'react-icons/bs'

class ChannelChat extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      messages: []
    };
    this.bottom = React.createRef();
  }

  componentDidMount() {
    App.cable.subscriptions.create(
      { channel: "ChatChannel" }, //channelId: this.props.channels[this.props.match.params.channelId] | channelId to find channel in backend. Additional k-v pairs become additional params
      {
        received: data => {
          console.log("show up please")
          this.setState({
            messages: this.state.messages.concat(data.message)
          });
          // take received message dispatch action to send to reducers and update state
          // make a redux cycle for channel messages
        },
        speak: function(data) {
          return this.perform("speak", data)
        }
      }
    );
  }

  componentDidUpdate() {
    this.bottom.current.scrollIntoView();
  }
  
  render() {
    let currentChannel = this.props.channels[this.props.match.params.channelId]
    let nameDisplay = currentChannel ? currentChannel.name : null
    const messageList = this.state.messages.map(message => {
      return (
        <li key={ message.id }>
          { message }
        </li>
      );
    });

    return (
      <div id="channel-chat-container">
        <div id="channel-chat-header">
          <p id="channel-chat-header-hash">#</p>
          <p id="channel-chat-header-name">{ nameDisplay }</p>
          <p id="members-list-icon"><BsFillPersonLinesFill size={ 22 } /></p>
        </div>
        <div id="channel-chat-box">
          <div id="chat-box">
            <div id="chat-box-welcome">
              <p id="welcome-text-main">Welcome to #{nameDisplay }!</p>
              <p id="welcome-text-sub">This is the start of the #{ nameDisplay } channel</p>
              <label id="welcome-text-edit-channel">Edit Channel (placeholder)</label>
            </div>
            <div id="message-list">
              { messageList }
              <div ref={this.bottom} />
            </div>
            <ChatForm />
          </div>
        </div>
      </div>
    )
  }
}

export default ChannelChat;