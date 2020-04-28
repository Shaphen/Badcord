import React from 'react';
import GreetingContainer from './greeting/greeting_container';
import { Route, Switch } from 'react-router-dom';
import LoginContainer from './session_form/login_container'
import SignupContainer from './session_form/signup_container'
import { AuthRoute } from '../util/route_util';

const App = () => (
  <div>
    <header>
      <h1>Badcord Component</h1>
    </header>
    <Switch>
      <AuthRoute path="/login" component={LoginContainer} />
      <AuthRoute path="/signup" component={SignupContainer} />
      <Route exact path='/' component={GreetingContainer} />
    </Switch>
  </div>
);

export default App;