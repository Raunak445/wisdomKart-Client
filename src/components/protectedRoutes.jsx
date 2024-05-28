import React, { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { useNavigate, useLocation } from "react-router-dom";
import { setUser } from "../redux/features/userSlice";
import { useCookies } from "react-cookie";
import axios from "axios";

export default function ProtectedRoutes({ children }) {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const location = useLocation();
  const [cookies] = useCookies(['token']);
  const [loading, setLoading] = useState(true);
  const [originalPath, setOriginalPath] = useState(null);

  useEffect(() => {
    const getUser = async () => {
      try {
        if (cookies.token !== "undefined" && cookies.token && cookies.token !== undefined) {
          const res = await axios.post(
            "https://wisdomkart-server.onrender.com/api/v1/user/getUserData",
            { token: cookies.token },
            {
              headers: {
                Authorization: `Bearer ${cookies.token}`,
              },
            }
          );
          dispatch(setUser(res.data.data));
          setLoading(false);
        } else {
          navigate("/login");
        }
      } catch (error) {
        console.error("Error fetching user data:", error);
        navigate("/login");
      }
    };

    if (loading) {
      getUser();
    }
  }, [dispatch, navigate, cookies.token, loading]);

  useEffect(() => {
    if (!loading && location.pathname !== "/login") {
      setOriginalPath(location.pathname);
    }
  }, [location.pathname, loading]);

  useEffect(() => {
    if (!loading && originalPath) {
      navigate(originalPath);
      setOriginalPath(null);
    }
  }, [originalPath, loading, navigate]);

  return cookies.token ? children : null;
}
