import React, { Component } from "react";
import Axios from "axios";
import Swal from "sweetalert2";

export default class Login extends Component {
  constructor(props) {
    super(props);
    this.state = {
      error: null,
      isLoaded: false,
      items: null,
      full: null,
      taiKhoan: "",
      matKhau: ""
    };
  }
  _onChange = e => {
    const { name, value } = e.target;
    this.setState({
      ...this.state,
      [name]: value
    });
  };
  render() {

    return (
      <div>
       
      </div>
    );
  }
}
