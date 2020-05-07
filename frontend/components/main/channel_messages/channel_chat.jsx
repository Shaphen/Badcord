import React from 'react';
import { BsFillPersonLinesFill } from 'react-icons/bs'

class ChannelChat extends React.Component {
  constructor(props) {
    super(props)
  }

  render() {
    let currentChannel = this.props.channels[this.props.match.params.channelId]
    let nameDisplay = currentChannel ? currentChannel.name : null
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
            <div>
              {/* -real chat goes here- */}
            </div>
          </div>
            <input type="text" id="channel-chat-new-message-box" placeholder="Message channel" />
        </div>
      </div>
    )
  }
}

export default ChannelChat;