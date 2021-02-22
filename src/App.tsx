import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import "./App.css";

import Home from "./pages/home";
import RejoindreSalon from "./pages/rejoindreSalon";
import Salon from "./pages/salon";

function App() {
  return (
    <Router>
      <Switch>
        <Route path="/rejoindre-salon/:token" children={<RejoindreSalon />} />

        <Route path="/salon/:id" children={<Salon />} />

        <Route exact path="/">
          <Home />
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
