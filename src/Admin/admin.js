import React, { Component } from "react";
import { connect } from "react-redux";
import { actLogin } from "../Action/profile";

class Admin extends Component {
  constructor(props) {
    super(props);
    this.state = {
      taiKhoan: "",
      matKhau: ""
    };
  }

  handleOnchange = e => {
    let { name, value } = e.target;
    this.setState({
      [name]: value
    });
  };

  handleSumit = e => {
    e.preventDefault();
    this.props.login(this.state, this.props.history);
  };

  render() {
    return (      
<div className="container text-light">
  <div className="row">
    <div className="col-lg-3 col-md-2" />
    <div className="col-lg-6 col-md-8 login-box">
      <div className="col-lg-12 login-key">
      </div>
      <div className="col-lg-12 login-title text-center mt-4">
        ADMIN LOGIN
      </div>
      <div className="col-lg-12 login-form">
        <div className="col-lg-12 login-form">
          <form onSubmit={this.handleSumit}>
            <div className="form-group">
              <label className="form-control-label">USERNAME</label>
              <input type="text" className="form-control"
              name="taiKhoan"
              onChange={this.handleOnchange}

              />
            </div>
            <div className="form-group">
              <label className="form-control-label">PASSWORD</label>
              <input type="password" className="form-control" i 
              name="matKhau"
              onChange={this.handleOnchange}
              />
              
            </div>
            <div className="col-lg-12 loginbttm">
              <div className="col-lg-6 login-btm login-text">
                {/* Error Message */}
              </div>
              <div className="col-lg-6 login-btm login-button">
                <button type="submit" className="btn btn-outline-primary">LOGIN</button>
              </div>
            </div>
          </form>
        </div>
      </div>
      <div className="col-lg-3 col-md-2" />
    </div>
  </div>
</div>
    );
  }
}

const mapDispatchToProps = dispatch => {
  return {
    login: (user, history) => {
      dispatch(actLogin(user, history));
    }
  };
};

export default connect(null, mapDispatchToProps)(Admin);
