import React from 'react';
import ChannelIndexItem from './channe_index-item';

class ChannelIndex extends React.Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    this.props.getChannels(this.props.match.params.server_id)
  }

  render() {
    return (
      <div id="channel-index-container">
        <div id="text-channels-tab-container">
          <p id="text-channels-tab-text">TEXT CHANNELS</p>
          {
            this.props.channels.map((channel, idx) => (
              <ChannelIndexItem channel={channel} key={idx} />
            ))
          }
        </div>
      </div>
    )
  }
}

export default ChannelIndex;