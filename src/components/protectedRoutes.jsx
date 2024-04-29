import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { setUser } from "../redux/features/userSlice";
import { useCookies } from "react-cookie";
import axios from "axios";

export default function ProtectedRoutes({ children }) {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [cookies] = useCookies(['token']);

  useEffect(() => {
    const getUser = async () => {
      try {
        // Check if token exists in cookies
        // console.log("token",cookies.token)
        if (cookies.token!=="undefined" && cookies.token && cookies.token!==undefined) {
          // If token exists, make a request to fetch user data
          console.log("here")
          console.log("here token",cookies.token)
          const res = await axios.post(
            "https://wisdomkart-server.onrender.com/api/v1/user/getUserData",
            { token: cookies.token },
            {
              headers: {
                Authorization: `Bearer ${cookies.token}`,
              },
            }
          );
          // Dispatch action to set user data in Redux state
          dispatch(setUser(res.data.data));
        } else {
          // If token doesn't exist, navigate to login page
          navigate("/login");
        }
      } catch (error) {
        console.error("Error fetching user data:", error);
        // If error occurs, navigate to login page
        navigate("/login");
      }
    };

    // Call getUser function when component mounts
    getUser();
  }, [dispatch, navigate, cookies.token]);

  // Render children if token exists, otherwise navigate to login page
  return cookies.token ? children : null;
}
