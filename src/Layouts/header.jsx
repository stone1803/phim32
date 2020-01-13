import React, { Component } from 'react'
import {Link} from "react-router-dom"
export default class Header extends Component {
    render() {
        return (
            <>
            <div className="">
            <nav
      class="navbar is-dark
    "
      role="navigation"
      aria-label="main navigation"
    >
      <div class="navbar-brand">
        <a class="navbar-item" href="">
          <img
            src="./img/logo.jpg"
          
          />
        </a>

        <a
          role="button"
          class="navbar-burger burger"
          aria-label="menu"
          aria-expanded="false"
          data-target="navbarBasicExample"
        >
          <span aria-hidden="true"></span>
          <span aria-hidden="true"></span>
          <span aria-hidden="true"></span>
        </a>
      </div>

      <div id="navbarBasicExample" class="navbar-menu">
        <div class="navbar-start">
          <Link to="/" class="navbar-item">
            TRANG CHỦ
          </Link>

          <Link to="/detail:id"class="navbar-item">
            LỊCH CHIẾU
          </Link>
          <a class="navbar-item">
            TIN TỨC
          </a>
          <a class="navbar-item">
            CỤM RẠP
          </a>
        </div>

        <div class="navbar-end">
          <div class="navbar-item">
            <div class="buttons">
              <a class="button is-danger">
                <strong>ĐĂNG KÝ</strong>
              </a>
              <a class="button is-warning">
                ĐĂNG NHẬP
              </a>
            </div>
          </div>
        </div>
      </div>
    </nav>
            </div>
            </>
        )
    }
}
