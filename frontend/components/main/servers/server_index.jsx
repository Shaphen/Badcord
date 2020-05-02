import React from 'react';
import ServerIndexItem from './server_index-item';

class ServerIndex extends React.Component {
  constructor(props){
    super(props);
  }

  componentDidMount() {
    this.props.getServers();
  }
  
  render() {
    return (
      <div className="main-page">
        <div id="server-index">
          <div id="server-button">
            <img className="home-server-pic" src={window.logo_head_white} />
            <p id="home-text-display">Home</p>
          </div>
          <ul>
            {
              this.props.servers.map((server) => (
                <ServerIndexItem server={server} key={server.id} />
              ))
            }
          </ul>
        </div>
        <div id="user-logout-container">
          <p>{this.props.currentUser.username}</p>
          <button className="logout-button" onClick={() => this.props.logout()}>LOGOUT</button>
        </div>
      </div>
    )
  }
}

export default ServerIndex;