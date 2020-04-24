import React from 'react';
import { Switch } from 'react-router-dom';

import Route from './Route';
import SignIn from '../pages/signin';
import SignUp from '../pages/SignUp';

import Dashboard from '../pages/Dashboards';

const Routes: React.FC = () => (
  <Switch>
    <Route path="/" exact component={SignIn} />
    <Route path="/signup" component={SignUp} />

    <Route path="/dashboards" component={Dashboard} isPrivate />
  </Switch>
);

export default Routes;
