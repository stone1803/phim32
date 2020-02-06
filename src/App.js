import React from "react";
import Header from "./Layouts/header";
import Home from "./Screen/Home/Home";
import Detail from "./Screen/Detail";
import Notification from "./Layouts/Notification";
import User from "./User/";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import Footer from "./Layouts/Footer";
import Reg from "./components/Login/Reg";
import CinemaCluster from "../src/Screen/CinemaCluster";
import Oder from "../src/components/Oder/Oder";
// setup redux
function App() {
  return (
    <BrowserRouter>
      <Header />
      <Switch>
        <Route path="/detail/:id" component={Detail} />
        <Route path="/infoUser" component={User} />
        <Route path="/Reg" component={Reg} />
        <Route path="/Oder/:id" component={Oder} />

        <Route path="/Notification" component={Notification} />
        <Route path="/CinemaCluster/:id" component={CinemaCluster} />

        <Route path="" component={Home} />
      </Switch>
      <Footer />
    </BrowserRouter>
  );
}

export default App;
