import React, { useState, useEffect, Fragment } from "react";
import { makeStyles } from "@material-ui/core/styles";
import Paper from "@material-ui/core/Paper";
import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TableContainer from "@material-ui/core/TableContainer";
import TableHead from "@material-ui/core/TableHead";
import TablePagination from "@material-ui/core/TablePagination";
import TableRow from "@material-ui/core/TableRow";
import { connect, useSelector } from "react-redux";
import Button from "@material-ui/core/Button";
import ModalAddUser from "./modal-add-user";

const columns = [
  { id: "Tài Khoản", label: "Tài Khoản", minWidth: 100 },
  { id: "Mật Khẩu", label: "Mật Khẩu", minWidth: 100 },

  { id: "Email", label: "Email", minWidth: 100 },
  { id: "Họ Tên", label: "Họ Tên", minWidth: 100 },
  { id: "Số ĐT", label: "Số ĐT", minWidth: 100 }
];

const useStyles = makeStyles({
  root: {
    width: "100%"
  },
  container: {
    maxHeight: 440
  }
});

function Tables() {
  const allUser = useSelector(state => state.listAdminReducer.allUser);
  console.log(allUser);
  const classes = useStyles();
  const [page, setPage] = React.useState(0);
  const [rowsPerPage, setRowsPerPage] = React.useState(10);

  const handleChangePage = (event, newPage) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = event => {
    setRowsPerPage(+event.target.value);
    setPage(0);
  };

  return (
    <div>

    <Paper className={classes.root}>
      <TableContainer className={classes.container}>
        <Table stickyHeader aria-label="sticky table">
          <TableHead>
            <TableRow>
              {columns.map(column => (
                <TableCell
                  key={column.id}
                  align={column.align}
                  style={{ minWidth: column.minWidth }}
                >
                  {column.label}
                </TableCell>
              ))}
            </TableRow>
          </TableHead>
          <TableBody>
            {allUser.map(row => (
              <TableRow key={row.name}>
                <TableCell component="th" scope="row">
                  {row.taiKhoan}
                </TableCell>
                <TableCell align="right">{row.matKhau}</TableCell>
                <TableCell align="right">{row.email}</TableCell>
                <TableCell align="right">{row.hoTen}</TableCell>
                <TableCell align="right">
                  <Button variant="contained" color="secondary">
                    SỬA
                  </Button>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>{" "}
        </Table>
      </TableContainer>
      <TablePagination
        rowsPerPageOptions={[10, 25, 100]}
        component="div"
        count={allUser.length}
        rowsPerPage={rowsPerPage}
        page={page}
        onChangePage={handleChangePage}
        onChangeRowsPerPage={handleChangeRowsPerPage}
      />
    </Paper>
    <div className="mt-4 ml-3">
    <ModalAddUser/>
                  </div>
    </div>
  );
}

export default connect()(Tables);
