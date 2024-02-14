import { Table } from "antd";
import axios from "axios";
import React, { useEffect, useState } from "react";
import moment from "moment";

const Appointments = () => {
  const [appointments, setAppointments] = useState();
  
  const getAppointments = async () => {
    try {
      await axios
        .get("http://localhost:8080/api/v1/user/userAppointments", {
          headers: {
            Authorization: "Bearer " + localStorage.getItem("token"),
          },
        })
        .then((res) => {
          if (res.data.success) {
            setAppointments(res.data.data);
          }
        });
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getAppointments();
  }, []);

  const columns = [
    {
      title: "ID",
      dataIndex: "_id",
    },
    // {
    //   title: "Name",
    //   dataIndex: "name",
    //   render: (text, record) => (
    //     <span>
    //       {record.mentorInfo.firstName} {record.mentorInfo.lastName}
    //     </span>
    //   ),
    // },
    // {
    //   title: "Phone",
    //   dataIndex: "phone",
    //   render: (text, record) => <span>{record.mentorId.phone}</span>,
    // },
    {   
      title: "Date & Time",
      dataIndex: "date",
      render: (text, record) => (
        <>
          <span>Date:{moment(record.date).format("DD-MM-YYYY")}</span>
          <br></br>
          <span>Time: {moment(record.time).format("HH:mm")}</span>
        </>
      ),
    },
    {
      title: "Status",
      dataIndex: "status",
    },
  ];

  return (
    <>
      <div className="text-blue">Appointments List</div>
      <Table columns={columns} dataSource={appointments} />
    </>
  );
};

export default Appointments;
