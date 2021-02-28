import React, { useState } from 'react'
import { BrowserRouter as Router, Switch, Route, Redirect } from "react-router-dom";
import { Home } from '../Home';
import { SignUp } from '../SignUp';

import '../../style/application.scss';

const App = () => {
  return (
    <Router>
      <Switch>
        <Route
          path="/"
          render={(props) => <Home {...props} />}
          exact
        />
        <Route
          path="/signup"
          render={(props) => <SignUp {...props} />}
          exact
        />
      </Switch>
    </Router>
  );
}

export { App }