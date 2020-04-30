import React from 'react';
import GreetingContainer from './greeting/greeting_container';
import DemoLoginContainer from './greeting/demo_login_container';
import HeaderContainer from './greeting/header_container';
import { Route, Switch } from 'react-router-dom';
import LoginContainer from './session_form/login_container'
import Art from '../components/greeting/art';
import SignupContainer from './session_form/signup_container'
import { AuthRoute } from '../util/route_util';

const App = () => (
  <div className="splash">
    <HeaderContainer />
    <header className="splash-header">
      <h3>The same way to chat with your communities and friends</h3>
      <p>Badcord is the second easiest way to communicate over only text (because the others are too much work), whether you’re part of a mob, a nightly robber group, a worldwide assassins guild, or just a handful of friends that want to atack things.</p>
      <DemoLoginContainer />
    </header>
    <Switch>
      <AuthRoute path="/login" component={LoginContainer} />
      <AuthRoute path="/signup" component={SignupContainer} />
      <Art />
    </Switch>
  </div>
);

export default App;