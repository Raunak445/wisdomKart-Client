import React, { useEffect, useState } from "react";
import { Spin, Table, message } from "antd";
import axios from "axios";
import moment from "moment";
import { useCookies } from "react-cookie";

const MentorAppointments = () => {
  const [appointments, setAppointments] = useState();
  const [cookies, setCookie, removeCookie] = useCookies(["token"]);
  const [loading, setLoading] = useState(true);

  const handleStatus = async (record, status) => {
    try {
      await axios.post(
        "https://wisdomkart-server.onrender.com/api/v1/mentor/updateAppointmentStatus",
        {
          appointmentsId: record._id,
          status,
        },
        {
          headers: {
            Authorization: "Bearer " + cookies.token,
          },
        }
      );

      message.success("Status changed Successfully");
    } catch (error) {
      console.log(error);
      message.error("Something went wrong-mentorAppointments");
    }
  };

  const getAppointments = async () => {
    try {
      await axios
        .get(
          "https://wisdomkart-server.onrender.com/api/v1/mentor/mentorAppointments",
          {
            headers: {
              Authorization: "Bearer " + cookies.token,
            },
          }
        )
        .then((res) => {
          if (res.data.success) {
            setAppointments(res.data.data);
            setLoading(false); 
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
      title: "S.No.",
      dataIndex: "serialNumber",
      render: (text, record, index) => index + 1,
    },
    {
      title: "Name",
      dataIndex: "menteeName",
    },
    {
      title: "Appointment Date & Time",
      dataIndex: "date",
      render: (text, record) => (
        <>
          <span>Date:{moment(record.date).format("DD-MM-YYYY")}</span>
          <br />
          <span>Time: {moment(record.time).format("hh:mm A")}</span>
        </>
      ),
      sorter: (a, b) => moment(b.date).valueOf() - moment(a.date).valueOf(),
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
              {/* <button
                className="btn btn-success w-100"
                onClick={() => handleStatus(record, "approved")}
              >
                Approved
              </button> */}
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

  console.log(appointments);
  return (
    <>
      <div className="text-blue">Appointments List</div>

      {loading ? (
        <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', minHeight: '300px' }}>
        <Spin spinning={loading} size="large"></Spin>
        </div>
      ) : (
        <Table columns={columns} dataSource={appointments} />
      )}
    </>
  );
};

export default MentorAppointments;
