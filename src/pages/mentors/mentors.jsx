import axios from "axios";
import React, { useEffect, useState } from "react";
import { Row, Table, message } from "antd";
import "./mentors.css";
import MentorDetails from "../mentorDetails/mentorDetails";
import { useNavigate } from "react-router-dom";
import { useCookies } from "react-cookie";
import { useDispatch } from "react-redux";
import { hideLoading, showLoading } from "../../redux/features/alert";
const Mentors = () => {
  const [mentors, setMentors] = useState([]);
  const [mentorInfo, setMentorInfo] = useState("");
  const [showData, setShowData] = useState(false);
  const [cookies, setCookie, removeCookie] = useCookies(['token']);
  const navigate = useNavigate();
  const dispatch=useDispatch()


  const handleAccountStatus = async (record, status) => {
    try {
      dispatch(showLoading())
      await axios
        .post(
          "https://wisdomkart-server.onrender.com/api/v1/admin/changeAccountStatus",
          {
            mentorId: record._id,
            userId: record.userId,
            status: status,
          },
          {
            headers: {
              Authorization: `Bearer ${cookies.token}`,
            },
          }
        )
        .then((res) => {
          dispatch(hideLoading())
          if (res.data.success) {
            message.success(message);
            window.location.reload();
          }
        });
    } catch (error) {
      dispatch(hideLoading())
      console.log(error);
      message.error("Something went wrong while updating status");
    }
  };

  const getMentors = async () => {
    try {
      await axios
        .get(
          "https://wisdomkart-server.onrender.com/api/v1/admin/getAllMentors",
          {
            headers: {
              Authorization: `Bearer ${cookies.token}`,
            },
          }
        )
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

  const handleMentorDetails = (record) => {
    // navigate(`/mentorDetails/${record.userId}`,{ state: { data: record } })

    setMentorInfo(record);
    setShowData(!showData);
  };

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
              <button
                className="btn-danger"
                onClick={() => handleAccountStatus(record, "pending")}
              >
                Deactivate
              </button>
            )}
          </div>
        );
      },
    }
    ,
    {
      title: "Info",
      dataIndex: "info",
      render: (text, record) => {
        console.log(record);
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
        .get(
          "https://wisdomkart-server.onrender.com/api/v1/user/getAllMentors",
          {
            headers: {
              Authorization: "Bearer " + cookies.token,
            },
          }
        )
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
      {showData && 
      <div>
      <MentorDetails mentor={mentorInfo}/>
      </div>
      
      }
    </div>
  );
};

export default Mentors;
