import React, { useEffect, useState } from "react";
import { Table, message } from "antd";
import axios from "axios";
import moment from "moment";

const MentorAppointments = () => {
  const [appointments, setAppointments] = useState();

  const handleStatus=async(record,status)=>{
    try {
      await axios.post('http://localhost:8080/api/v1/mentor/updateAppointmentStatus',{
        appointmentsId:record._id,status
      },{
        headers:{
          Authorization:'Bearer '+localStorage.getItem('token')
        }
      })

      message.success("Status changed Successfully")
      
    } catch (error) {
      console.log(error)
      message.error("Something went wrong-mentorAppointments")
    }
  }

  const getAppointments = async () => {
    try {
      await axios
        .get("http://localhost:8080/api/v1/mentor/mentorAppointments", {
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
    {
      title: "Action",
      dataIndex: "actions",
      render: (text, record) => (
        <div className="d-flex">
          {record.status === "pending" && (
            <div className="d-flex">
              <button
                className="btn btn-success w-100"
                
                onClick={() => handleStatus(record, "approved")}
              >
                Approved
              </button>
              <button
                className="btn btn-danger w-100 ms-2"
                onClick={() => handleStatus(record, "rejected")}
              >
                Rejected
              </button>
            </div>
          )}
        </div>
      ),
    },
  ];

  return (
    <>
      <div className="text-blue">Appointments List</div>
      <Table columns={columns} dataSource={appointments} />
    </>
  );
};

export default MentorAppointments;
