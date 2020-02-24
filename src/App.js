import React from "react";

import { BrowserRouter, Route, Switch } from "react-router-dom";

import HomeTemplate from "./templates/home-template";
// import AdminTemplate from "./templates/admin-template";
import { routesHome, routesAdmin } from "./routers";
// import LoginAdmin from "./Admin/LoginAdmin";
import Footer from "./Layouts/Footer.jsx"
// setup redux
const showMenuHome = routes => {
  if (routes && routes.length > 0) {
    return routes.map((item, index) => {
      return (
        <HomeTemplate
          key={index}
          path={item.path}
          exact={item.exact}
          Component={item.component}
        />
      );
    });
  }
};
// const showMenuAdmin = routes => {
//   if (routes && routes.length > 0) {
//     return routes.map((item, index) => {
//       return (
//         <AdminTemplate
//           key={index}
//           path={item.path}
//           exact={item.exact}
//           Component={item.component}
//         />
//       );
//     });
//   }
// };
function App() {
  return (
    <BrowserRouter>
      <Switch>
        {showMenuHome(routesHome)}
        {/* {showMenuAdmin(routesAdmin)} */}
        {/* <Route path="/admin" component={LoginAdmin} /> */}
      </Switch>
      <Footer />
    </BrowserRouter>
  );
}

export default App;
