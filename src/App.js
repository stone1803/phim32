import React from "react";
import "./App.css";
import "bulma/css/bulma.css";
import Header from "./Layouts/header";
import Home from "./Screen/Home/Home";

import { BrowserRouter, Route, Switch } from "react-router-dom";

// setup redux
function App() {
  return (
    <BrowserRouter>
      <Header />
      <Switch>
      <Route path="/"  component={Home} />



      </Switch>
    </BrowserRouter>
  );
}

export default App;
