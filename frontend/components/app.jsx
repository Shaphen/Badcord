import React from 'react';
import DemoLoginContainer from './greeting/demo_login_container';
import HeaderContainer from './greeting/header_container';
import { Route, Switch } from 'react-router-dom';
import LoginContainer from './session_form/login_container'
import ArtContainer from '../components/greeting/art_container';
import SignupContainer from './session_form/signup_container'
import { AuthRoute } from '../util/route_util';
import { ProtectedRoute } from '../util/route_util';
import ServerIndexContrainer from './main/servers/server_index_contrainer';

const App = () => (
  <div className="splash">
    <HeaderContainer />
    <header className="splash-header">
      <h3>The same way to chat with your communities and friends</h3>
      <p>Badcord is the second easiest way to communicate over only text (because the others are too much work), whether you’re part of a mob, a nightly robber group, a worldwide assassins guild, or just a handful of friends that want to atack things.</p>
      <DemoLoginContainer />
    </header>
    <Switch>
      <ProtectedRoute path="/main" component={ServerIndexContrainer} />
      <AuthRoute exact path="/login" component={LoginContainer} />
      <AuthRoute exact path="/signup" component={SignupContainer} />
      <Route exact path="/" component={ArtContainer} />
    </Switch>
  </div>
);

export default App;