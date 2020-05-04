import React from 'react';

class ServerDisplay extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div id="server-display-box">
        <div id='server-display-name'>
          <p id="server-display-text">{this.props.servers[this.props.match.params.server_id] ? this.props.servers[this.props.match.params.server_id].name : null}</p>
        </div>
      </div>
    )
  }
}

export default ServerDisplay;