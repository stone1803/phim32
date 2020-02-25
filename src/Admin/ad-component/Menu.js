import React, { Component } from 'react'
import { Link } from 'react-router-dom'

export default class Menu extends Component {
    render() {
        return (
            <div className="sidebar-wrapper">
            <ul className="nav">
              <li className="active ">
                <Link to="/dashboard">
                  <i className="nc-icon nc-bank" />
                  <p>Dashboard</p>
                </Link>
              </li>
              <li>
                <Link to="/add-user">
                  <i className="nc-icon nc-diamond" />
                  <p>Quản Lý Thành Viên</p>
                </Link>
              </li>
              <li>
                <Link to="/fiml">
                  <i className="nc-icon nc-pin-3" />
                  <p>Quản Lý Phim</p>
                </Link>
              </li>
              <li>
                <Link to="/ticket">
                  <i className="nc-icon nc-bell-55" />
                  <p>Quản Lý Phòng Vé</p>
                </Link>
              </li>
              <li>
                <Link to="/">
                  <i className="nc-icon nc-single-02" />
                  <p>User Profile</p>
                </Link>
              </li>
            </ul>
          </div>
        )
    }
}
