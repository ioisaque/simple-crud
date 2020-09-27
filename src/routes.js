import React from 'react';
import { Switch } from 'react-router-dom';
import { Route } from 'react-router-dom';

import E404 from './views/_error/404';
import Dashboard from './views/dashboard';

export default function Routes() {
  return (
    <Switch>
      <Route path="/" exact component={Dashboard} />
      <Route path="/" component={E404} />
    </Switch>
  );
}
