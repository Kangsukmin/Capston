import React from 'react';
import Dashboard from './Dashboard';
import SignIn from './signIn';
import {Switch, Route} from "react-router-dom";
import PrivateRoute from './PrivateRoute';
import Postal from './Postal';

function App() {
  return (
    <Switch>
      <PrivateRoute path = "/main">
        <Dashboard />
      </PrivateRoute>     
      <Route path = "/postal">
        <Postal />
      </Route>
      <Route path = "/">
        <SignIn />
      </Route>
    </Switch>
  )
}

export default App;
