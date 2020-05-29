import React from 'react';
import { Route, Switch } from 'react-router-dom';
import LoginContainer from './session_form/login_container'
import ArtContainer from '../components/greeting/art_container';
import SignupContainer from './session_form/signup_container'
import { AuthRoute } from '../util/route_util';
import { ProtectedRoute } from '../util/route_util';
import MainContainer from './main/main_container';

const App = () => (
  <div className="splash">
    <Switch>
      <ProtectedRoute path="/channels/" component={MainContainer} />
      <AuthRoute exact path="/login" component={LoginContainer} />
      <AuthRoute exact path="/signup" component={SignupContainer} />
      <Route exact path="/" component={ArtContainer} />
    </Switch>
  </div>
);

export default App;