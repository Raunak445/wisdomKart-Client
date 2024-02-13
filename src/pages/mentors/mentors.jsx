import axios from "axios";
import React, { useEffect, useState } from "react";
import { Row, Table, message } from "antd";
import "./mentors.css";
import MentorList from "../../components/mentorList";
const Mentors = () => {
  const [mentors, setMentors] = useState([]);
  const handleAccountStatus = async (record, status) => {
    try {
      await axios
        .post(
          "http://localhost:8080/api/v1/admin/changeAccountStatus",
          {
            mentorId: record._id,
            userId: record.userId,
            status: status,
          },
          {
            headers: {
              Authorization: `Bearer ${localStorage.getItem("token")}`,
            },
          }
        )
        .then((res) => {
          if (res.data.success) {
            message.success(message);
            window.location.reload();
          }
        });
    } catch (error) {
      console.log(error);
      message.error("Something went wrong while updating status");
    }
  };

  const getMentors = async () => {
    try {
      await axios
        .get("http://localhost:8080/api/v1/admin/getAllMentors", {
          headers: {
            Authorization: `Bearer ${localStorage.getItem("token")}`,
          },
        })
        .then((res) => {
          console.log(res);
          if (res.data.success) {
            setMentors(res.data.data);
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
    getMentors();
  }, []);

  const columns = [
    {
      title: "First Name",
      dataIndex: "firstName",
    },
    {
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
        return (
          <div className="d-flex">
            {record.status === "pending" ? (
              <button
                className="btn-success"
                onClick={() => handleAccountStatus(record, "approved")}
              >
                Approve
              </button>
            ) : (
              <button className="btn-danger">Reject</button>
            )}
          </div>
        );
      },
    },
  ];

  const [approvedMentors, setApprovedMentors] = useState([]);

  const getApprovedMentors = async () => {
    try {
      await axios
        .get("http://localhost:8080/api/v1/user/getAllMentors", {
          headers: {
            Authorization: "Bearer " + localStorage.getItem("token"),
          },
        })
        .then((res) => {
          if (res.data.success) setApprovedMentors(res.data.data);
        });
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(()=>{
  getApprovedMentors()
  },[])

  return (
    <div className="wrapper">
      <div className="text-blue">Mentors</div>
      <Table columns={columns} dataSource={mentors} />
      <Row>
        {approvedMentors && approvedMentors.map(m=> <MentorList mentor={m}/>) }
      </Row>
    </div>
  );
};

export default Mentors;
