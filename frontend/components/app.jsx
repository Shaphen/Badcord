import React from 'react';
import GreetingContainer from './greeting/greeting_container';
import { Route, Switch } from 'react-router-dom';
import LoginContainer from './session_form/login_container'
import SignupContainer from './session_form/signup_container'
import { AuthRoute } from '../util/route_util';

const App = () => (
  <div className="splash">
    <header classname="splash-header">
      <h3>The same way to chat with your communities and friends</h3>
      <p>Badcord is the second easiest way to communicate over only text (because the others are too much work), whether you’re part of a mob, a nightly robber group, a worldwide assassins guild, or just a handful of friends that want to atack things.</p>
    </header>
    <Switch>
      <AuthRoute path="/login" component={LoginContainer} />
      <AuthRoute path="/signup" component={SignupContainer} />
      <Route exact path='/' component={GreetingContainer} />
    </Switch>
  </div>
);

export default App;