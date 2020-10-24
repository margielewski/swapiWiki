import React from 'react';
import { useSelector } from 'react-redux';
import {
  Switch,
  Route,
  Redirect,
} from "react-router-dom";

import Nav from './Components/Header/Header';
import PrivateRoute from './Components/PrivateRoute/PrivateRoute';
import { RootStore } from './store/store';
import CharacterDetails from './Views/CharacterDetails/CharacterDetails';
import Characters from './Views/Characters/Characters';
import Login from './Views/Login/Login';
import Main from './Views/Main/Main';
import PlanetDetails from './Views/PlanetDetails/PlanetDetails';


import Planets from './Views/Planets/Planets';
import Starships from './Views/Starships/Starships';
import StarshipDetails from './Views/StarshipsDetails/StarshipsDetails';

function App() {
  const auth = useSelector((state: RootStore) => state.auth)

  return (
    <div className="App">
      <Nav />
      <Switch>
        <PrivateRoute auth={auth} exact path="/starships">
          <Starships />
        </PrivateRoute>
        <PrivateRoute auth={auth} path="/starships/:name">
          <StarshipDetails />
        </PrivateRoute>
        <PrivateRoute auth={auth} exact path="/characters">
          <Characters />
        </PrivateRoute>
        <PrivateRoute auth={auth} path="/characters/:name">
          <CharacterDetails />
        </PrivateRoute>
        <PrivateRoute auth={auth} exact path="/planets">
          <Planets />
        </PrivateRoute>
        <PrivateRoute auth={auth} path="/planets/:name">
          <PlanetDetails />
        </PrivateRoute>
        <Route path="/login">
          {auth.loggedIn ? <Redirect to="/" /> : <Login />}
        </Route>
        <PrivateRoute auth={auth} path="/">
          <Main />
        </PrivateRoute>
      </Switch>
    </div>
  );
}

export default App;
