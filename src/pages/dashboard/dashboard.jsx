import { Button, DatePicker, Form, Input, TimePicker, message } from "antd";
import React, { useCallback, useEffect, useState } from "react";
import { useSelector } from "react-redux";
import style from "./dashboard.module.css";
import TextArea from "antd/es/input/TextArea";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { useCookies } from "react-cookie";
import moment from "moment";
const Dashboard = () => {
  const { user } = useSelector((state) => state.user);
  const [mentor, setMentor] = useState(false);
  const [cookies, setCookie, removeCookie] = useCookies(["token"]);
  const [posts, setPosts] = useState([]);
  const [createNewPost, setCreateNewPost] = useState(false);
  const navigate = useNavigate();
  const handleCreateNewPost = () => {
    setCreateNewPost(!createNewPost);
  };

  if (posts !== undefined || posts == null)
    posts?.sort((a, b) => {
      const dateA = new Date(a.createdAt);
      const dateB = new Date(b.createdAt);
      return dateB - dateA;
      // Compare dates in descending order
    });

  const onRatingClick = (postId) => {
    navigate(`/rating/${postId}`);
  };

  // console.log('user id',user._id)

  const handleCreatePost = async (values) => {
    try {
      await axios
        .post(
          "https://wisdomkart-server.onrender.com/api/v1/mentor/createPost",
          {
            ...values,
            mentorId: user._id,
            comments: [],
            mentorName: user.firstName + " " + user.lastName,
          },
          {
            headers: {
              Authorization: "Bearer " + cookies.token,
            },
          }
        )
        .then((res) => {
          setCreateNewPost(!createNewPost);
          if (res.data.success) {
            message.success(res.data.message);
            setPosts(res.data.data);
            window.location.reload();
          } else {
            message.error(res.data.message);
          }
        });
    } catch (error) {
      console.log(error.message);
    }
  };

  useEffect(() => {
    if (user?.isMentor !== undefined) setMentor(user.isMentor);
  }, [user]);

  useEffect(() => {
    const fetchPosts = async () => {
      try {
        if (!user.isAdmin) {
         
          const res = await axios.get(
            "http://localhost:8080/api/v1/user/getPosts",
            {
              headers: {
                Authorization: `Bearer ${cookies.token}`,
              },
            }
          );
          if (res.data.success) {
            //    message.success(res.data.message)
            // console.log(res.data.data)
            // console.log(Array.isArray(res.data.data))
            setPosts(res.data.data);
          } else {
            // message.error(res.data.message);
            console.log(error)
          }
        } else {

          const res = await axios.get(
            "http://localhost:8080/api/v1/user/getAllPosts",
            {
              headers: {
                Authorization: `Bearer ${cookies.token}`,
              },
            }
          );
          if (res.data.success) {
            //    message.success(res.data.message)
            // console.log(res.data.data)
            // console.log(Array.isArray(res.data.data))
            setPosts(res.data.data);
          } else {
            // message.error(res.data.message);
            console.log(error.message)
          }
        }
      } catch (error) {
        console.log(error);
        // message.error(error.message);
      }
    };

    fetchPosts(); // Call the inner function to initiate data fetching
  }, [createNewPost,user]);

  function formatTime(timeString) {
    // Parse the time string using moment
    const parsedTime = moment(timeString);

    // Extract the time in "HH:mm" format
    const formattedTime = parsedTime.format("HH:mm");

    return formattedTime;
  }
  function convert12(time) {
    // Check correct time format and split into components
    time = time
      .toString()
      .match(/^([01]\d|2[0-3])(:)([0-5]\d)(:[0-5]\d)?$/) || [time];

    if (time.length > 1) {
      // If time format correct
      time = time.slice(1); // Remove full string match value
      time[5] = +time[0] < 12 ? "AM" : "PM"; // Set AM/PM
      time[0] = +time[0] % 12 || 12; // Adjust hours
    }
    return time.join(""); // return adjusted time or original string
  }

  return (
    <div className={style.wrapper}>
      <div className="text-blue">Dashboard</div>
      {
        <div className="text-blue">
          Number of sessions: {posts === null ? 0 : posts.length}
        </div>
      }
      {mentor && (
        <button
          onClick={handleCreateNewPost}
          className={style.createNewPost}
          style={{ marginBottom: "10px" }}
        >
          Create a new Update
        </button>
      )}

      {createNewPost && (
        <Form
          labelCol={{ span: 6 }}
          wrapperCol={{ span: 12 }}
          onFinish={handleCreatePost}
          // autoComplete="off"
        >
          <Form.Item
            label="Title"
            name="title"
            rules={[{ required: true, message: "Title is required" }]}
            className={style.item}
          >
            <Input />
          </Form.Item>

          <Form.Item
            label="Mentee Email"
            name="mentee"
            rules={[{ required: true, message: "Mentee email is required" }]}
            className={style.item}
          >
            <Input />
          </Form.Item>

          <Form.Item
            label="Select Meeting Date"
            name="meetingDate"
            rules={[{ required: true, message: "Please select meeting date" }]}
          >
            <DatePicker style={{ width: "100%" }} />
          </Form.Item>

          <Form.Item
            label="Select Metting Time"
            name="meetingTime"
            rules={[{ required: true, message: "Please select a time" }]}
          >
            <TimePicker format="hh:mm A" style={{ width: "100%" }} />
          </Form.Item>

          <Form.Item
            label="Points Discussed"
            name="points"
            rules={[
              { required: true, message: "Points Disscussed is required" },
            ]}
          >
            <TextArea rows={5} />
          </Form.Item>
          <Form.Item
            label="Conclusion"
            name="conclusion"
            rules={[{ required: true, message: "Conclusion is required" }]}
          >
            <TextArea rows={5} />
          </Form.Item>

          <Form.Item wrapperCol={{ offset: 6, span: 12 }}>
            <Button type="primary" htmlType="submit">
              Create Update
            </Button>
          </Form.Item>
        </Form>
      )}

      {Array.isArray(posts) &&
        posts.map((post) => {
          return (
            <div
              className={style.wrapper}
              key={post._id}
              style={{
                padding: "10px",
                border: "1px solid #ccc",
                borderRadius: "5px",
                marginBottom: "20px",
                cursor: "pointer", // Added cursor pointer for hover effect
                transition: "background-color 0.3s", // Smooth background color transition on hover
              }}
              // onClick={()=>onPostClick(post._id)}
            >
              <div
                className="postTitle"
                style={{
                  fontSize: "18px",
                  fontWeight: "bold",
                  marginBottom: "5px",
                  color: "#333", // Updated font color
                }}
              >
                Update Title: {post.title}
              </div>

              <div
                className="points"
                style={{
                  fontSize: "16px",
                  marginBottom: "10px",
                  color: "#555",
                }} // Updated font color
              >
                Update Points: {post.points}
              </div>
              <div
                className="session"
                style={{
                  fontSize: "16px",
                  marginBottom: "10px",
                  color: "#555",
                }} // Updated font color
              >
                Update Conclusion: {post.conclusion}
              </div>
              <div
                style={{
                  fontSize: "14px",
                  arginTop: "10px",
                  marginBottom: "5px",
                  color: "#777",
                }}
              >
                {" "}
                {/* Updated font color */}
                Mentor: {post.mentorName}
              </div>
              <div style={{ fontSize: "14px", color: "#777" }}>
                {" "}
                {/* Updated font color */}
                Mentee: {post.menteeName}
              </div>
              <div
                style={{
                  fontSize: "14px",
                  marginBottom: "5px",
                  marginTop: "10px",
                  color: "#777",
                }}
              >
                {" "}
                {/* Updated font color */}
                Meeting Time: {convert12(formatTime(post?.meetingTime))}
                <br />
                Meeting Date: {new Date(post.createdAt).toLocaleDateString()}
              </div>
            </div>
          );
        })}
    </div>
  );
};

export default Dashboard;
