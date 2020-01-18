import React, { Component } from "react";
import { Link } from "react-router-dom";
import { Button,Modal } from 'react-bootstrap';
export default class Header extends Component {
  constructor(props) {
    super(props);
    this.state = {
      setShow:null,
  
    };
  }
  
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
                <img src="https://i.ibb.co/Vmrpv2h/logo192.png" />
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

                <Link to="/detail:id" class="navbar-item">
                  LỊCH CHIẾU
                </Link>
                <Link class="navbar-item">TIN TỨC</Link>
                <Link class="navbar-item">CỤM RẠP</Link>
              </div>

              <div class="navbar-end">
                <div class="navbar-item">
                  <div class="buttons">
                    <a class="button is-danger">
                      <strong>ĐĂNG KÝ</strong>
                    </a>
                    <a class="button is-warning">ĐĂNG NHẬP</a>
                  </div>
                </div>
              </div>
            </div>
          </nav>
        </div>
 
      </>
    );
  }
}
