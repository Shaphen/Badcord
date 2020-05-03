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
    
    <Switch>
      <ProtectedRoute path="/main" component={ServerIndexContrainer} />
      <AuthRoute exact path="/login" component={LoginContainer} />
      <AuthRoute exact path="/signup" component={SignupContainer} />
      <Route exact path="/" component={ArtContainer} />
    </Switch>
  </div>
);

export default App;