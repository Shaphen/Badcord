import React from 'react';
import ServerIndexContainer from './server_index_container';
import ServerDisplayContainer from "./server_display_container";
import HomeDisplayContainer from "./home_display_container";
import { Route, Switch } from 'react-router-dom';
import { AuthRoute, ProtectedRoute } from '../../../util/route_util';

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
        <Switch>
          <ProtectedRoute path="/channels/:server_id" component={ServerDisplayContainer} />
        </Switch>
      </div>
    )
  }
}

export default Main;