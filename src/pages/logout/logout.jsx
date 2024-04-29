import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { message } from "antd";
import { useDispatch } from "react-redux";
import { hideLoading } from "../../redux/features/alert";
import { useCookies } from "react-cookie"; // Import useCookies hook

function Logout() {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const [cookies, removeCookie] = useCookies(["token"]); // Use useCookies hook

  useEffect(() => {
    // Clear the token from cookies
    removeCookie("token");

    // Redirect to the home page
    navigate("/");

    // Dispatch hideLoading action
    dispatch(hideLoading());

    // Show success message
    message.success("Logged out Successfully");

    // Reload the window to ensure a fresh state
    window.location.reload();
  }, [dispatch, navigate, removeCookie]); // Add dependencies to the useEffect dependency array

  return <div>Logging out...</div>; // Return a placeholder component if needed
}

export default Logout;
