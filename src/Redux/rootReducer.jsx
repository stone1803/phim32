import { combineReducers } from "redux";
import listMovieReducer from "./Listmove"
// TAO STORE TONG UNG DUNG
const rootRecuder = combineReducers({
  // noi chua cac recuder cho nghiep vu store con
  listMovieReducer:listMovieReducer
});
export default rootRecuder;
