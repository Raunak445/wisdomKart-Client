import { Button, Form, Input, message } from "antd";
import React, { useCallback, useEffect, useState } from "react";
import { useSelector } from "react-redux";
import style from "./dashboard.module.css";
import TextArea from "antd/es/input/TextArea";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const Dashboard = () => {
  const { user } = useSelector((state) => state.user);
  const [mentor, setMentor] = useState(false);
  const [posts, setPosts] = useState([]);
  const [createNewPost, setCreateNewPost] = useState(false);
  const navigate = useNavigate();
  const handleCreateNewPost = () => {
    setCreateNewPost(!createNewPost);
  };

  if(posts!==undefined || posts==null)
  posts?.sort((a, b) => {
    const dateA = new Date(a.createdAt);
    const dateB = new Date(b.createdAt);
    return dateB - dateA;
    // Compare dates in descending order
  });

 const onRatingClick=(postId)=>{
    navigate(`/rating/${postId}`)
  }

  const handleCreatePost = async (values) => {
    try {
      await axios
        .post(
          "http://localhost:8080/api/v1/mentor/createPost",
          {
            ...values,
            mentorId: user._id,
            comments: [],
            mentorName: user.firstName + " " + user.lastName,
          },
          {
            headers: {
              Authorization: "Bearer " + localStorage.getItem("token"),
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
        const res = await axios.get(
          "http://localhost:8080/api/v1/user/getPosts",
          {
            headers: {
              Authorization: `Bearer ${localStorage.getItem("token")}`,
            },
          }
        );
        if (res.data.success) {
          //    message.success(res.data.message)
          // console.log(res.data.data)
          // console.log(Array.isArray(res.data.data))
          setPosts(res.data.data);
        } else {
          message.error(res.data.message);
        }
      } catch (error) {
        console.log(error);
        message.error(error.message);
      }
    };

    fetchPosts(); // Call the inner function to initiate data fetching
  }, [createNewPost]);

  return (
    <div className={style.wrapper}>
      <div className="text-blue">Dashboard</div>
      {
        <div className="text-blue">
          Number of sessions taken : {posts === null ? 0 : posts.length}
        </div>
      }
      {mentor && (
        <button onClick={handleCreateNewPost} className={style.createNewPost}>
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

          <Form.Item label="Points Discussed" name="points"  rules={[{ required: true, message: "Points Disscussed is required" }]}>
            <TextArea rows={5} />
          </Form.Item>
          <Form.Item label="Conclusion" name="conclusion"  rules={[{ required: true, message: "Conclusion is required" }]}>
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
              }}
              // onClick={()=>onPostClick(post._id)}
            >
              <div
                className="postTitle"
                style={{
                  fontSize: "18px",
                  fontWeight: "bold",
                  marginBottom: "5px",
                }}
              >
                Update Title:{post.title}
              </div>
           
              <div
                className="points"
                style={{ fontSize: "16px", marginBottom: "10px" }}
              >
                Update Points:{post.points}
              </div>
              <div
                className="session"
                style={{ fontSize: "16px", marginBottom: "10px" }}
              >
                Update Conclusion:{post.conclusion}
              </div>
              <div style={{ fontSize: "14px", marginBottom: "5px" }}>
                Mentor: {post.mentorName}
              </div>
              <div style={{ fontSize: "14px" }}>Mentee: {post.menteeName}</div>
              <div>Time:
                {new Date(post.createdAt).toLocaleTimeString()} <br></br>
                Date:
                {new Date(post.createdAt).toLocaleDateString()}
              </div>
              {!user?.isMentor && !post.isRated &&<button className="btn btn-primary btn-sm w-25"  onClick={()=>onRatingClick(post._id)}>Rate the Session</button>}
              {post.isRated && <div className="rating">Rating:{post?.rating} </div>}
              {post.feedback && <div className="feedback">Feedback:{post?.feedback} </div>}
              {post.reason && <div className="rating">Reason:{post?.reason} </div>}
               
            </div>
            
          );
        })}
    </div>
  );
};

export default Dashboard;
