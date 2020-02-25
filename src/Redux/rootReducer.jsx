import { combineReducers } from "redux";
import listMovieReducer from "./Listmove";
import listAdminReducer from "./Listadmin"
// TAO STORE TONG UNG DUNG
const rootRecuder = combineReducers({
  // noi chua cac recuder cho nghiep vu store con
  listMovieReducer:listMovieReducer,
  listAdminReducer:listAdminReducer
});
export default rootRecuder;
