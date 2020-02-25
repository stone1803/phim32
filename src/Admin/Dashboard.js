import React, { Component } from "react";
export default class Dashboard extends Component {
  render() {
    return <div className="">
  <div className="sidebar" data-color="white" data-active-color="danger">
    {/*
  Tip 1: You can change the color of the sidebar using: data-color="blue | green | orange | red | yellow"
    */}
    <div className="logo">
      <a href="http://localhost.com:3000" className="simple-text logo-mini">
        <div className="logo-image-small">
          <img src="../../assetsc/img/logo.jpg" />
        </div>
      </a>
      <a href="http://www.creative-tim.com" className="simple-text logo-normal">
        PHIM32.COM
        {/* <div class="logo-image-big">
      <img src="../assets/img/logo-big.png">
    </div> */}
      </a>
    </div>
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
  </div>
  <div className="main-panel">
    {/* Navbar */}

    {/* End Navbar */}
    {/* <div class="panel-header panel-header-lg">

  <canvas id="bigDashboardChart"></canvas>


</div> */}
    <div className="content">
      <div className="row">
        <div className="col-lg-3 col-md-6 col-sm-6">
          <div className="card card-stats">
            <div className="card-body ">
              <div className="row">
                <div className="col-5 col-md-4">
                  <div className="icon-big text-center icon-warning">
                    <i className="nc-icon nc-globe text-warning" />
                  </div>
                </div>
                <div className="col-7 col-md-8">
                  <div className="numbers">
                    <p className="card-category">Capacity</p>
                    <p className="card-title">150GB
                    </p><p>
                    </p></div>
                </div>
              </div>
            </div>
            <div className="card-footer ">
              <hr />
              <div className="stats">
                <i className="fa fa-refresh" /> Xem chi tiết
              </div>
            </div>
          </div>
        </div>
        <div className="col-lg-3 col-md-6 col-sm-6">
          <div className="card card-stats">
            <div className="card-body ">
              <div className="row">
                <div className="col-5 col-md-4">
                  <div className="icon-big text-center icon-warning">
                    <i className="nc-icon nc-money-coins text-success" />
                  </div>
                </div>
                <div className="col-7 col-md-8">
                  <div className="numbers">
                    <p className="card-category">Revenue</p>
                    <p className="card-title">$ 1,345
                    </p><p>
                    </p></div>
                </div>
              </div>
            </div>
            <div className="card-footer ">
              <hr />
              <div className="stats">
                <i className="fa fa-calendar-o" /> Xem chi tiết
              </div>
            </div>
          </div>
        </div>
        <div className="col-lg-3 col-md-6 col-sm-6">
          <div className="card card-stats">
            <div className="card-body ">
              <div className="row">
                <div className="col-5 col-md-4">
                  <div className="icon-big text-center icon-warning">
                    <i className="nc-icon nc-vector text-danger" />
                  </div>
                </div>
                <div className="col-7 col-md-8">
                  <div className="numbers">
                    <p className="card-category">Errors</p>
                    <p className="card-title">23
                    </p><p>
                    </p></div>
                </div>
              </div>
            </div>
            <div className="card-footer ">
              <hr />
              <div className="stats">
                <i className="fa fa-clock-o" /> In the last hour
              </div>
            </div>
          </div>
        </div>
        <div className="col-lg-3 col-md-6 col-sm-6">
          <div className="card card-stats">
            <div className="card-body ">
              <div className="row">
                <div className="col-5 col-md-4">
                  <div className="icon-big text-center icon-warning">
                    <i className="nc-icon nc-favourite-28 text-primary" />
                  </div>
                </div>
                <div className="col-7 col-md-8">
                  <div className="numbers">
                    <p className="card-category">Followers</p>
                    <p className="card-title">+45K
                    </p><p>
                    </p></div>
                </div>
              </div>
            </div>
            <div className="card-footer ">
              <hr />
              <div className="stats">
                <i className="fa fa-refresh" /> Update now
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</div>

  
  }
}
