import React, { useState, useEffect, Fragment } from "react";
import { makeStyles } from "@material-ui/core/styles";
import Modal from "@material-ui/core/Modal";
import Backdrop from "@material-ui/core/Backdrop";
import Fade from "@material-ui/core/Fade";
import Button from "@material-ui/core/Button";
import { connect } from "react-redux";
import { addUserAction } from "../../Action/admin";

const useStyles = makeStyles(theme => ({
  modal: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center"
  },
  paper: {
    backgroundColor: theme.palette.background.paper,
    border: "2px solid #000",
    boxShadow: theme.shadows[5],
    padding: theme.spacing(2, 4, 3)
  }
}));

function ModalAddUser(props) {
  const classes = useStyles();
  const [open, setOpen] = React.useState(false);

  const handleOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };
  // ADD USER
  const [state, setState] = useState({
    taiKhoan: "",
    matKhau: "",
    hoTen: "",
    email: "",
    soDt: "",
    maNhom: "",
    maLoaiNguoiDung: ""
  });
  const [dsNguoiDung, setDsNguoiDung] = useState([]); //dsNguoiDung = []
  ////
  const handleChange = e => {
    let { value, name } = e.target;
    console.log(e);
    setState({
      ...state,
      [name]: value
    });
  };
  const handleSubmit = e => {
    //Chặn sự kiện submit browser
    e.preventDefault();
    //Gọi action đưa dữ liệu về backend
    console.log(state);
    props.themNguoiDung(state);

  };

  return (
    <div>
      <Button variant="contained" color="primary" onClick={handleOpen}>
        Thêm Mới
      </Button>

      <Modal
        aria-labelledby="transition-modal-title"
        aria-describedby="transition-modal-description"
        className={classes.modal}
        open={open}
        onClose={handleClose}
        closeAfterTransition
        BackdropComponent={Backdrop}
        BackdropProps={{
          timeout: 500
        }}
      >
        <Fade in={open}>
          <form className="container" onSubmit={handleSubmit}>
            <h3>Thêm người dùng</h3>
            <div className="form-group">
              <span>Tài khoản</span>
              <input
                className="form-control"
                name="taiKhoan"
                onChange={handleChange}
              />
            </div>
            <div className="form-group">
              <span>Mật khẩu</span>
              <input
                className="form-control"
                name="matKhau"
                onChange={handleChange}
              />
            </div>
            <div className="form-group">
              <span>Họ tên</span>
              <input
                className="form-control"
                name="hoTen"
                onChange={handleChange}
              />
            </div>
            <div className="form-group">
              <span>Email</span>
              <input
                className="form-control"
                name="email"
                onChange={handleChange}
              />
            </div>
            <div className="form-group">
              <span>Số điện thoại</span>
              <input
                className="form-control"
                name="soDt"
                onChange={handleChange}
              />
            </div>
            <div className="form-group">
              <span>Mã nhóm</span>
              <input
                className="form-control"
                name="maNhom"
                onChange={handleChange}
              />
            </div>
            <div className="form-group">
              <span>Mã loại người dùng</span>
              <input
                className="form-control"
                name="maLoaiNguoiDung"
                onChange={handleChange}
              />
            </div>
            <div className="form-group">
              <button type="submit" className="btn btn-success">
                Thêm người dùng
              </button>
            </div>
          </form>
        </Fade>
      </Modal>
    </div>
  );
}
const mapDispatchToProps = dispatch => {
  return {
    themNguoiDung: nguoiDung => {
      dispatch(addUserAction(nguoiDung));
    }
  };
};

export default connect(null, mapDispatchToProps)(ModalAddUser);
