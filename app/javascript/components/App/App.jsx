import React, { useState } from 'react'
import { BrowserRouter as Router, Switch, Route, Redirect } from "react-router-dom";
import { HelloWorld } from '../HelloWorld';

const App = () => {
  return (
    <Router>
      <HelloWorld greeting="Lets Go MotherFuckaaa"/>
    </Router>
  );
}

export { App }