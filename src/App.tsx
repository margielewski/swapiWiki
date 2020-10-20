import React from 'react';
import {
  Switch,
  Route,
} from "react-router-dom";

import Nav from './Components/Header/Header';
import Login from './Views/Login/Login';

function App() {
  return (
    <div className="App">
      <Nav />
      <Switch>

        <Route path="/login">
          <Login />
        </Route>
        <Route path="/">
          <div></div>
        </Route>
      </Switch>
    </div>
  );
}

export default App;
