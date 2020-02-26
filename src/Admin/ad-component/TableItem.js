import React from 'react'
import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TableContainer from "@material-ui/core/TableContainer";
import TableHead from "@material-ui/core/TableHead";
import TablePagination from "@material-ui/core/TablePagination";
import TableRow from "@material-ui/core/TableRow";
import Button from "@material-ui/core/Button";

export const TableItem = ({row}) => {
    return (
        <TableRow key={row.name}>
                  <TableCell component="th" scope="row">
                    {row.taiKhoan}
                  </TableCell>
                  <TableCell align="right">{row.matKhau}</TableCell>
                  <TableCell align="right">{row.email}</TableCell>
                  <TableCell align="right">{row.hoTen}</TableCell>
                  <TableCell align="right">
                    <Button
                      variant="contained"
                      color="secondary"
                      onClick={() => {
                        return row
                      }}
                   
                    >
                      Xoa
                    </Button>
                  </TableCell>
                </TableRow>
    )
}

