import React, { useState } from "react";
import MaterialTable from "material-table";
import { useSelector } from 'react-redux'

export default function Tabless() {
  const allUser = useSelector(state => state.listAdminReducer.allUser)
  console.log(allUser)
  const [state, setState] = React.useState({
    columns: [
      { title: "Tài Khoản", field: "taiKhoan" },
      { title: "Họ Tên", field: "hoTen" },
      { title: "Email", field: "email" },
      { title: "Mật Khẩu", field: "matKhau" }
    ],
    allUser: allUser
  });

  return (
    <MaterialTable
      title="Danh Sách Người Dùng"
      columns={state.columns}
      data={state.allUser}
      editable={{
        onRowAdd: newData =>
          new Promise(resolve => {
            setTimeout(() => {
              resolve();
              setState(prevState => {
                const data = [...prevState.data];
                data.push(newData);
                return { ...prevState, data };
              });
            }, 600);
          }),
        onRowUpdate: (newData, oldData) =>
          new Promise(resolve => {
            setTimeout(() => {
              resolve();
              if (oldData) {
                setState(prevState => {
                  const data = [...prevState.data];
                  data[data.indexOf(oldData)] = newData;
                  return { ...prevState, data };
                });
              }
            }, 600);
          }),
        onRowDelete: oldData =>
          new Promise(resolve => {
            setTimeout(() => {
              resolve();
              setState(prevState => {
                const data = [...prevState.data];
                data.splice(data.indexOf(oldData), 1);
                return { ...prevState, data };
              });
            }, 600);
          })
      }}
    />
  );
}


