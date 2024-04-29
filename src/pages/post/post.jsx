import React, { useEffect, useState } from "react";
import { message } from "antd";
import axios from "axios";
import { useParams } from "react-router-dom";
import { useCookies } from "react-cookie";

const Post = () => {
  const [post, setPost] = useState([]);
  const [comments, setComments] = useState([]);
  const [cookies, setCookie, removeCookie] = useCookies(['token']);
  const { postId } = useParams();

  useEffect(() => {
    // console.log(`postId is ${postId}`)
    const getPost = async () => {
      try {
        const res = await axios.post(
          `${import.meta.env.VITE_LOCAL_URL}/api/v1/mentor/getMentorPost`,
          {
            postId: postId,
          },
          {
            headers: {
              Authorization: `Bearer ${cookies.token}`,
            },
          }
        );
        if (res.data.success) {
          setPost(res.data.data);
        } else {
          message.error(res.data.message);
        }
      } catch (error) {
        console.log(error);
        message.error(error.message);
      }
    };

    getPost();
  }, []);

  useEffect(() => {
    // console.log(`postId is ${postId}`)
    const getComments = async () => {
      try {
        const res = await axios.post(
          `${import.meta.env.VITE_LOCAL_URL}/api/v1/user/getComments`,
          {
            postId: postId,
          },
          {
            headers: {
              Authorization: `Bearer ${cookies.token}`,
            },
          }
        );
        if (res.data.success) {
          setComments(res.data.data);
        } else {
          //message.error(res.data.message);
        }
      } catch (error) {
        console.log(error);
        //message.error(error.message);
      }
    };

    getComments();
  }, []);

  return (
    <div>
      {post && (
        <>
          Update Title:{post.title}
          <br />
          Update Points:{post.points}
          <br />
          Update Conclusion:{post.conclusion}
        </>
      )}

      {
        comments 
      }
    </div>
  );
};

export default Post;
