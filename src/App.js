import React from "react";

import Header from "./Layouts/header";
import Home from "./Screen/Home/Home";
import Detail from "./Screen/Detail";
import Notification from "./Layouts/Notification"
import User from "./User/"
import { BrowserRouter, Route, Switch } from "react-router-dom";
import Footer from "./Layouts/Footer";
import Test from "../src/test/index"
import Login from "./components/Login/Login";
import Reg from "./components/Login/Reg";
import CinemaSystem from "./Layouts/CinemaSystem";
import SearchExampleStandard from "../src/test/Phuc"
import CinemaCluster from "../src/Screen/CinemaCluster"
import Oder from "./Layouts/Oder";
// setup redux
function App() {
  return (
    <BrowserRouter>
      <Header />
      <Switch>
      <Route path="/detail/:id"  component={Detail} />
      <Route path="/infoUser"  component={User} />
      <Route path="/Reg"  component={Reg} />
      <Route path="/Notification"  component={Notification} />
      <Route path="/CinemaCluster/:id"  component={CinemaCluster} />

      <Route path="" component={Home} />

      </Switch>
      <Footer/>
    </BrowserRouter>

  );
}

export default App;
