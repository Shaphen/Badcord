import React from 'react';
import Modal from 'react-modal';

class ServerDisplay extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div id="server-display-box">
        <div id='server-display-name'>
          <p id="server-display-text">{this.props.servers[this.props.match.params.server_id] ? this.props.servers[this.props.match.params.server_id].name : null}</p>
          <label id="dropdown-server-name">⌄</label>
        </div>
      </div>
    )
  }
}

export default ServerDisplay;