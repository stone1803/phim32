import React from "react";

import Header from "./Layouts/header";
import Home from "./Screen/Home/Home";
import Detail from "./Screen/Detail";

import { BrowserRouter, Route, Switch } from "react-router-dom";
import Footer from "./Layouts/Footer";
import Test from "../src/test/index"
import Login from "./components/Login/Login";
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
