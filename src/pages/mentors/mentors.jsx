import axios from "axios";
import React, { useEffect, useState } from "react";
import { Row, Table, message } from "antd";
import "./mentors.css";
import MentorDetails from "../mentorDetails/mentorDetails";
import { useNavigate } from "react-router-dom";
const Mentors = () => {
  const [mentors, setMentors] = useState([]);
  const [mentorInfo,setMentorInfo]=useState("")
  const [showData,setShowData]=useState(false)
  const navigate=useNavigate()
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
          // console.log(res);
          if (res.data.success) {
            setMentors(res.data.data);
            // console.log(res.data.data);
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


  const handleMentorDetails=(record)=>{
  // navigate(`/mentorDetails/${record.userId}`,{ state: { data: record } })

    setMentorInfo(record)
    setShowData(!showData)
  }

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
              <button className="btn-danger">Deactivate</button>
            )}
          </div>
        );
      },
    },
    {
      title: "Info",
      dataIndex: "info",
      render: (text, record) => {
        console.log(record);
        // console.log(text)
        return (
          <div className="d-flex">
            <button
              className="btn-success w-100 h-80"
              onClick={() => handleMentorDetails(record)}
            >
              Mentor Info
            </button>
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

  useEffect(() => {
    getApprovedMentors();
  }, []);

  return (
    <div className="wrapper">
      <div className="text-blue">Mentors</div>
      <Table columns={columns} dataSource={mentors} />
      {
        showData &&
        (
          <MentorDetails mentor={mentorInfo}/>
        )
      }
    </div>
  );
};

export default Mentors;
