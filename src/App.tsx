import React from 'react';
import {
  Switch,
  Route,
} from "react-router-dom";
import Nav from './Components/Header/Header';

function App() {
  return (
    <div className="App">
      <Nav />
      <Switch>
        <Route path="/about">
        </Route>
        <Route path="/users">
        </Route>
        <Route path="/">
        </Route>
      </Switch>
    </div>
  );
}

export default App;
