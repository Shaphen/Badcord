import React from 'react';
import ChatForm from './chat_form';
import Modal from 'react-modal'
import EditChannelContainer from '../channels/channel_CRUD/edit_channel_container';
import { BsFillPersonLinesFill } from 'react-icons/bs'
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

toast.configure();
class ChannelChat extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      messages: [],
      showEditModal: false
    };
    this.bottom = React.createRef();
    this.handleCloseEditModal = this.handleCloseEditModal.bind(this);
    this.handleOpenEditModal = this.handleOpenEditModal.bind(this);
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

  handleOpenEditModal() {
    this.setState({ showEditModal: true });
  }

  handleCloseEditModal() {
    this.setState({ showEditModal: false });
  }
  
  render() {
    let currentChannel = this.props.channels[this.props.match.params.channelId]
    let nameDisplay = currentChannel?.name // ? currentChannel.name : null
    let messageList;
    if (currentChannel) {
      let filteredMessages = this.props.messages.concat(this.state.messages).filter(message => {
        return message.channel_id === currentChannel.id
      });
      messageList = filteredMessages.map((message, idx) => {
        return (
          <div key={idx} id="new-message">
            <img id="message-default-logo" src={window.logo_head_white} />
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
        <div id="chat-seperator">
          <div id="channel-chat-box">
            <div id="chat-box">
              <div id="message-list">
                <div id="chat-box-welcome">
                  <p id="welcome-text-main">Welcome to #{nameDisplay}!</p>
                  <p id="welcome-text-sub">This is the start of the #{nameDisplay} channel</p>
                  <Modal
                    isOpen={this.state.showEditModal}
                    contentLabel="Delete Server Modal"
                    onRequestClose={this.handleCloseEditModal}
                    style={{
                      content: {
                        top: '50%',
                        left: '50%',
                        right: '0',
                        bottom: '0',
                        marginLeft: "-245px",
                        marginTop: "-175px",
                        overflow: "hidden",
                        marginTop: "-170px",
                        width: "410px",
                        height: "220px",
                        backgroundColor: "#36393f",
                        border: "none",
                        color: "white"
                      },
                      overlay: {
                        position: 'fixed',
                        backgroundColor: 'rgba(0,0,0,0.7)',
                        zIndex: '50'
                      }
                    }}
                  >
                    <EditChannelContainer
                      channelName={currentChannel ? currentChannel.name : null}
                      channelId={currentChannel ? currentChannel.id : null}
                      closeModal={this.handleCloseEditModal}
                    />
                  </Modal>
                  <label id="welcome-text-edit-channel" onClick={this.handleOpenEditModal}>Edit Channel</label>
                </div>
                { messageList }
                <div ref={this.bottom} />
              </div>
              <ChatForm authorId={this.props.currentUser.id} channel={currentChannel} />
            </div>
          </div>
          <div id="members-box">
            {
              this.props.members.length ? this.props.members.map((member, idx) => (
                <div key={idx} id="member-bar">
                  <img id="members-default-logo" src={window.logo_head_white} />
                  <p id="member-username">
                    { member?.username }
                  </p>
                </div>
              )) : null
            }
          </div>
          <div id="filler" />
        </div>
      </div>
    )
  }
}

export default ChannelChat;