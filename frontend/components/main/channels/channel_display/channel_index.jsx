import React from 'react';
import ChannelIndexItem from './channel_index-item';

class ChannelIndex extends React.Component {
  constructor(props) {
    super(props);
  }

  componentDidUpdate(prevProps) {
    if ((prevProps.location.pathname) !== (this.props.location.pathname)){
      this.props.getChannels(this.props.match.params.server_id)
    }
  }

  componentDidMount() {
    this.props.getChannels(this.props.match.params.server_id)
  }

  render() {
    return (
      <div id="channel-index-container">
        <div id="text-channels-tab-container">
          <div id="text-channels-tab">
            <p id="text-channels-tab-text">TEXT CHANNELS</p>
            <label id="add-channel-button">+</label>
            <p id="add-channel-text">Create Channel</p>
          </div>
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