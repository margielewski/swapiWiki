import React from 'react';
import {
  Switch,
  Route,
} from "react-router-dom";

import Nav from './Components/Header/Header';
import Login from './Views/Login/Login';
import Main from './Views/Main/Main';


import Planets from './Views/Planets/Planets';

function App() {

  return (
    <div className="App">
      <Nav />
      <Switch>
        <Route path="/planets">
          <Planets />
        </Route>
        <Route path="/login">
          <Login />
        </Route>
        <Route path="/">
          <Main />
        </Route>
      </Switch>
    </div>
  );
}

export default App;
