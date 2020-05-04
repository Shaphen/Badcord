import React from 'react';
import ServerIndexContainer from './server_index_container'

class Main extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className="main-page">
        <ServerIndexContainer />
        <div id="user-logout-container">
          <p>{this.props.currentUser.username}</p>
          <button className="logout-button" onClick={() => this.props.logout()}>LOGOUT</button>
        </div>
      </div>
    )
  }
}

export default Main;