import React from "react";

import Header from "./Layouts/header";
import Home from "./Screen/Home/Home";
import Detail from "./Screen/Detail";

import { BrowserRouter, Route, Switch } from "react-router-dom";
import Footer from "./Layouts/Footer";

// setup redux
function App() {
  return (
    <BrowserRouter>
      <Header />
      <Switch>
      <Route path="/detail/:id"  component={Detail} />
      <Route path="/"  component={Home} />
      </Switch>
      <Footer/>
    </BrowserRouter>
  );
}

export default App;
