import React from 'react';
import ChatForm from './chat_form';
import { BsFillPersonLinesFill } from 'react-icons/bs'
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

toast.configure();
class ChannelChat extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      messages: []
    };
    this.bottom = React.createRef();
  }

  componentDidMount() {
    let channelId = this.props.channels[this.props.match.params.channelId]
    App.cable.subscriptions.create(
      { channel: "ChatChannel", channelId: channelId },
      {
        received: data => {
          this.setState({
            messages: this.state.messages.concat(data)
          });
        },
        speak: function(data) {
          return this.perform("speak", data)
        }
      }
    );
  }

  componentDidUpdate() {
    this.bottom.current.scrollIntoView(); // ({ behavior: 'smooth', block: 'nearest', inline: 'start' });
  }
  
  render() {
    let currentChannel = this.props.channels[this.props.match.params.channelId]
    let nameDisplay = currentChannel ? currentChannel.name : null
    let messageList;
    if (currentChannel) {
      let filteredMessages = this.props.messages.concat(this.state.messages).filter(message => {
        return message.channel_id === currentChannel.id
      });
      messageList = filteredMessages.map((message, idx) => {
        return (
          <div key={idx} id="new-message">
            <img id="message-deafult-logo" src={window.logo_head_white} />
            <div id="message-content-box">
              <p id="sender-name">{this.props.users[message.author_id].username}</p>
              <p id="sender-message">{message.body}</p>
            </div>
          </div>
        );
      });
    }

    return (
      <div id="channel-chat-container">
        <ToastContainer id="toast" position="top-center" />
        <div id="channel-chat-header">
          <p id="channel-chat-header-hash">#</p>
          <p id="channel-chat-header-name">{ nameDisplay }</p>
          <p id="members-list-icon"><BsFillPersonLinesFill size={ 22 } /></p>
        </div>
        <div id="channel-chat-box">
          <div id="chat-box">
            <div id="message-list">
              <div id="chat-box-welcome">
                <p id="welcome-text-main">Welcome to #{nameDisplay}!</p>
                <p id="welcome-text-sub">This is the start of the #{nameDisplay} channel</p>
                <label id="welcome-text-edit-channel">Edit Channel</label>
              </div>
              { messageList }
              <div ref={this.bottom} />
            </div>
            <ChatForm authorId={this.props.currentUser.id} channel={currentChannel} />
          </div>
        </div>
      </div>
    )
  }
}

export default ChannelChat;