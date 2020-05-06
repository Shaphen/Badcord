import React from 'react';

class ChannelIndex extends React.Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    debugger
    this.props.getChannels(this.props.match.params.server_id)
  }

  render() {
    return (
      <div id="channel-index-container">
        <div id="text-channels-tab-container">
          <p id="text-channels-tab-text">Text Channels</p>
        </div>
      </div>
    )
  }
}

export default ChannelIndex;