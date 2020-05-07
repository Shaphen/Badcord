import React from 'react';

const ChannelIndexItem = (props) => {
  return (
    <div id="channel-box">
      <label id="channel-hash">#</label>
      <p id="channel-name">{props.channel.name}</p>
    </div>
  )
}

export default ChannelIndexItem;