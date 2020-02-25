import React, { Component } from 'react'

export default class Menu extends Component {
    render() {
        return (
            <div className="sidebar-wrapper">
            <ul className="nav">
              <li className="active ">
                <a href="./dashboard.html">
                  <i className="nc-icon nc-bank" />
                  <p>Dashboard</p>
                </a>
              </li>
              <li>
                <a href="./icons.html">
                  <i className="nc-icon nc-diamond" />
                  <p>Icons</p>
                </a>
              </li>
              <li>
                <a href="./map.html">
                  <i className="nc-icon nc-pin-3" />
                  <p>Maps</p>
                </a>
              </li>
              <li>
                <a href="./notifications.html">
                  <i className="nc-icon nc-bell-55" />
                  <p>Notifications</p>
                </a>
              </li>
              <li>
                <a href="./user.html">
                  <i className="nc-icon nc-single-02" />
                  <p>User Profile</p>
                </a>
              </li>
            </ul>
          </div>
        )
    }
}
