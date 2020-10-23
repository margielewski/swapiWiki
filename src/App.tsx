import React from 'react';
import {
  Switch,
  Route,
} from "react-router-dom";

import Nav from './Components/Header/Header';
import CharacterDetails from './Views/CharacterDetails/CharacterDetails';
import Characters from './Views/Characters/Characters';
import Login from './Views/Login/Login';
import Main from './Views/Main/Main';
import PlanetDetails from './Views/PlanetDetails/PlanetDetails';


import Planets from './Views/Planets/Planets';
import Starships from './Views/Starships/Starships';
import StarshipDetails from './Views/StarshipsDetails/StarshipsDetails';

function App() {

  return (
    <div className="App">
      <Nav />
      <Switch>
        <Route exact path="/starships">
          <Starships />
        </Route>
        <Route path="/starships/:name">
          <StarshipDetails />
        </Route>
        <Route exact path="/characters">
          <Characters />
        </Route>
        <Route path="/characters/:name">
          <CharacterDetails />
        </Route>
        <Route exact path="/planets">
          <Planets />
        </Route>
        <Route path="/planets/:name">
          <PlanetDetails />
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
