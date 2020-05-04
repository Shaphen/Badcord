import React from 'react';

class ServerDisplay extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div id="server-display-box">
        <div id='server-display-name'>
          {currentUser.id}
          {/* <p>{this.props.servers[this.props.match.params.serverId] ? this.props.servers[this.props.match.params.serverId] : null }</p> */}
        </div>
      </div>
    )
  }
}

export default ServerDisplay;