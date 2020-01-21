import React, { Component } from "react";
import Search from "../../Search";

export default class Moviesearch extends Component {
  render() {
    return (
      <div>
        <div className="container mt-4 align-center " style={{ padding: 0 }}>
          <div className="notification">
            <Search/>
          </div>
        </div>
      </div>
    );
  }
}
