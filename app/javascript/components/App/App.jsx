import React, { useState } from 'react'
import { BrowserRouter as Router, Switch, Route, Redirect } from "react-router-dom";
import { Landing } from '../Landing';
import { SignUp } from '../SignUp';
import { Login } from '../Login';

import '../../style/application.scss';

const App = () => {
  return (
    <Router>
      <Switch>
        <Route
          path="/"
          render={(props) => <Landing {...props} />}
          exact
        />
        <Route
          path="/signup"
          render={(props) => <SignUp {...props} />}
          exact
        />
        <Route
          path="/login"
          render={(props) => <Login {...props} />}
          exact
        />
      </Switch>
    </Router>
  );
}

export { App }