import React, { useEffect, useState } from "react";
import axios from "axios";
import { Table } from "antd";
import './users.css'
const Users = () => {
  const [users, setUsers] = useState([]);

  const getUsers = async () => {
    try {
       await axios
        .get("https://wisdomkart-server.onrender.com/api/v1/admin/getAllUsers", {
          headers: {
            Authorization: `Bearer ${localStorage.getItem("token")}`,
          },
        })
        .then((res) => {
          console.log(res);
          if (res.data.success) {
            setUsers(res.data.data);
            console.log(res.data.data);
          } else {
            console.log("Cannot get Users");
          }
        });

    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getUsers();
  }, []);

  const columns = [
    {
      title: "First Name",
      dataIndex: "firstName",
    },{
      title: "Last Name",
      dataIndex: "lastName",
    },
    {
      title: "Email",
      dataIndex: "email",
    },
    {
      title: "Created At",
      dataIndex: "createdAt",
    },
    {
      title: "Actions",
      dataIndex: "action",
      render: (text, record) => {
      return (  <div className="d-flex">
          <button className="btn-danger">Block</button>
        </div>)
      },
    },
  ];

  return (
    <div className="wrapper">
      <div className="text-blue">Users</div>
      <Table columns={columns} dataSource={users} />
    </div>
  );
};

export default Users;
