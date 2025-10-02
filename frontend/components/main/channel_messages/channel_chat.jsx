import React, { useState, useEffect, useRef, useCallback } from 'react';
import ChatForm from './chat_form';
import Modal from 'react-modal'
import EditChannelContainer from '../channels/channel_CRUD/edit_channel_container';
import UpdateMessageContainer from './channel_message_CRUD/update_message_container'
import { BsFillPersonLinesFill } from 'react-icons/bs'
import "react-toastify/dist/ReactToastify.css";

const ChannelChat = (props) => {
  const [showEditModal, setShowEditModal] = useState(false);
  const [showEditChatModal, setShowEditChatModal] = useState(false);
  const [currMessage, setCurrMessage] = useState(null);
  const [active, setActive] = useState(true);
  
  const bottom = useRef();

  useEffect(() => {
    let channelId = props.channels[props.match.params.channelId]
    App.cable.subscriptions.create(
      { 
        channel: "ChatChannel", channelId: channelId },
      {
        received: message => {
          props.createMessage(message)
        },
        speak: function(message) {
          return this.perform("speak", message)
        }
      }
    );
  }, [props.channels, props.match.params.channelId, props.createMessage]);

  const deleteMessage = useCallback((e, message) => {
    e.preventDefault();
    props.deleteMessage(message.id)
  }, [props.deleteMessage]);

  useEffect(() => {
    bottom.current.scrollIntoView();
  });

  const handleOpenEditModal = useCallback(() => {
    setShowEditModal(true);
  }, []);

  const handleCloseEditModal = useCallback(() => {
    setShowEditModal(false);
  }, []);

  const toggleEditChatModal = useCallback((e, message) => {
    if (message) {
      setCurrMessage(message)
    }
    setShowEditChatModal(prevState => !prevState)
  }, []);
  
  const toggleMemberList = useCallback(() => {
    setActive(prevState => !prevState)
  }, []);
  
  let currentChannel = props.channels[props.match.params.channelId];
  let currentServer = props.servers[props.match.params.serverId];
  let currentUser = props.currentUser;
  let nameDisplay = currentChannel?.name;
  let messageList;

  if (currentChannel && currentUser) {
    let filteredMessages = props.filterMessages
    
    messageList = filteredMessages.map((message, idx) => {
      return (
        <div key={idx} id="new-message" className="message-animation">
          <img id="message-avatar" src={props.users[message.author_id]?.photoURL || window.logo_head_white} />
          <div id="message-content-box">
            <p id="sender-name">{props.users[message.author_id]?.username}</p>
            <p id="sender-message">{message.body}</p>
          </div>
          {
            currentUser.id === message.author_id ? 
            <button onClick={e => deleteMessage(e, message)} id="delete-channel-message">DELETE</button>
            : null
          }
          {
            currentUser.id === message.author_id ?
            <button onClick={e => toggleEditChatModal(e, message)} id="update-channel-message">EDIT</button>
            : null
          }
          <Modal
            id="channel-update-modal"
            isOpen={showEditChatModal}
            contentLabel="Edit Message Modal"
            onRequestClose={e => toggleEditChatModal(e)}
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
            <UpdateMessageContainer
              message={currMessage}
              closeModal={e => toggleEditChatModal(e)}
            />
          </Modal>
        </div>
      );
    });
  }

  return (
    <div id="channel-chat-container">
      <div id="channel-chat-header">
        <p id="channel-chat-header-hash">#</p>
        <p id="channel-chat-header-name">{ nameDisplay }</p>
        <div id="members-list-icon" onClick={toggleMemberList}><BsFillPersonLinesFill size={ 22 } /></div>
        <p id="member-list-text">Member List</p>
      </div>
      <div id="chat-seperator">
        <div id="channel-chat-box">
          <div id="chat-box">
            <div id="message-list">
              <div id="chat-box-welcome">
                <p id="welcome-text-main">Welcome to #{nameDisplay}!</p>
                <p id="welcome-text-sub">This is the start of your #{nameDisplay} plot</p>
                <Modal
                  id="channel-edit-modal"
                  isOpen={showEditModal}
                  contentLabel="Edit Channel Modal"
                  onRequestClose={handleCloseEditModal}
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
                    closeModal={handleCloseEditModal}
                  />
                </Modal>
                <label id="welcome-text-edit-channel" onClick={handleOpenEditModal}>Edit Channel</label>
              </div>
              { messageList }
              <div ref={bottom} id="spacer"/>
            </div>
            <ChatForm 
              authorId={props.currentUser.id} 
              channel={currentChannel} 
              isActive={active} 
            />
          </div>
        </div>
        <div className={active ? "members-box" : null}>
          {
            props.members.length && active ? props.members.map((member, idx) => (
              <div key={idx} id="member-bar">
                <img id="members-default-logo" src={member?.photoURL || window.logo_head_white} />
                <p id="member-username">
                  { member?.username }
                </p>
                {
                  member?.id == currentServer?.owner_id ? <p id="server-owner-title">( owner )</p> : null
                }
              </div>
            )) : null
          }
        </div>
        <div id="filler" />
      </div>
    </div>
  )
};

export default ChannelChat;