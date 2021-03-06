import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';


import App from './App';
import "bulma/css/bulma.css";

import "bootstrap/dist/css/bootstrap.min.css";
import "jquery/dist/jquery.min.js";
import "popper.js/dist/umd/popper.min.js";
import "bootstrap/dist/js/bootstrap.min.js";
import "./App.css";
import * as serviceWorker from './serviceWorker';


// setup redux
import { Provider } from "react-redux";
import{createStore,applyMiddleware,compose} from "redux";
import rootRecuder from "./Redux/rootReducer"
import thunk from "redux-thunk"
// tao ra store tong cua ung dung
// window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const store = createStore(
  rootRecuder,
  composeEnhancers(applyMiddleware(thunk))
);
ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById("root")
);


// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
