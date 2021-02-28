import React, { useState } from 'react'
import { BrowserRouter as Router, Switch, Route, Redirect } from "react-router-dom";
import { Home } from '../Home';
import '../../style/application.scss';

const App = () => {
  return (
    <Router>
      <Home/>
    </Router>
  );
}

export { App }