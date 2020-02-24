import Home from "./Screen/Home/Home";
import User from "./User";
import Reg from "./components/Login/Reg";
import Oder from "./components/Oder/Oder";
import Detail from "./Screen/Detail/index"
import Notification from "./Layouts/Notification";
import CinemaCluster from "./Screen/CinemaCluster";
import Dashboard from "./Admin/Dashboard"
const routesHome = [
  {
    path: "/",
    exact: true,
    component: Home
  },
  {
    path: "/infoUser/:id",
    exact: false,
    component: User
  },
  {
    path: "/Reg",
    exact: false,
    component: Reg
  },
  {
    path: "/Oder/:id",
    exact: false,
    component: Oder
  },
  {
    path: "/Notification",
    exact: false,
    component: Notification
  },
  {
    path: "/CinemaCluster/:id",
    exact: false,
    component: CinemaCluster
  },
  {
    path: "/detail/:id",
    exact: false,
    component: Detail
  }
];

const routesAdmin = [
  {
    path: "/dashboard",
    exact: false,
    component: Dashboard
  }
];
export { routesHome,routesAdmin };
