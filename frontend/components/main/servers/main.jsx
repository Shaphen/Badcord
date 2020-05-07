import React from 'react';
import ServerIndexContainer from './server_index_container';
import ServerDisplayContainer from "./server_display_container";
import HomeDisplayContainer from "./home_display_container";
import { Switch } from 'react-router-dom';
import { ProtectedRoute } from '../../../util/route_util';
import ChannelChatContainer from '../channel_messages/channel_chat_container';

class Main extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className="main-page">
        <ServerIndexContainer />
        <HomeDisplayContainer />
        <div id="user-logout-container">
          <p>{this.props.currentUser.username}</p>
          <button className="logout-button" onClick={() => this.props.logout()}>LOGOUT</button>
        </div>
        <ProtectedRoute path="/channels/:server_id" component={ServerDisplayContainer} />
        <ProtectedRoute path="/channels/:serverId/:channelId" component={ChannelChatContainer} />
      </div>
    )
  }
}

export default Main;