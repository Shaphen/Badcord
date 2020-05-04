import React from 'react';
import ServerIndexContainer from './server_index_container';
import ServerDisplay from "./server_display";

class Main extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      currentServer: ""
    }
  }

  handleChangeServer(server) {
    this.setState({ currentServer: [server] })
  }

  render() {
    return (
      <div className="main-page">
        <ServerIndexContainer changeServer={this.handleChangeServer} />
        < ServerDisplay currentServer={this.currentServer} />
        <div id="user-logout-container">
          <p>{this.props.currentUser.username}</p>
          <button className="logout-button" onClick={() => this.props.logout()}>LOGOUT</button>
        </div>
      </div>
    )
  }
}

export default Main;