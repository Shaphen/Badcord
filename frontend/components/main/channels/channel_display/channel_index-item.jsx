import React from 'react';

const ChannelIndexItem = (props) => {
  return (
    <div id="channel-box">
      <label id="channel-hash">#</label>
      <p id="channel-name">{props.channel.name}</p>
      <label id="delete-channel-x">x</label>
      <p id="delete-channel-text">Delete Channel</p>
    </div>
  )
}

export default ChannelIndexItem;