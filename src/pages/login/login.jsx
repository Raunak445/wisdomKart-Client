import { useState } from "react";
import axios from "axios";
import { Link, useNavigate } from "react-router-dom";
import loginCss from "./login.module.css";
import { message } from "antd";
import { useDispatch } from "react-redux";
import { showLoading, hideLoading } from "../../redux/features/alert";
import { useCookies } from 'react-cookie';

const Login = () => {
  const [data, setData] = useState({ email: "", password: "" });
  const [error, setError] = useState("");
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const [cookies, setCookie] = useCookies(['token']);


  const handleChange = ({ currentTarget: input }) => {
    setData({ ...data, [input.name]: input.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    dispatch(showLoading());
    try {
      const url = `https://wisdomkart-server.onrender.com/api/v1/user/login`;
      const res = await axios.post(url, data);
      dispatch(hideLoading());
      if (res.data.success) {
        message.success({
          content: "Logged In Successfully",
          duration: 5, // Duration in seconds
          style: {
            fontSize: "18px", // Adjust the font size as needed
          },
        });
       
        // localStorage.setItem("token", res.data.token);

        const expirationDate = new Date();
        expirationDate.setDate(expirationDate.getDate() + 5); // Expires in 5 days
        setCookie('token', res.data.token, { expires: expirationDate });

        // console.log(res.data);
        navigate("/");
        // Reload the page after navigation
        // window.location.reload();
      } else {
        
        message.error(res.data.message)
        setError(res.data.message)
      }
    } catch (error) {
      dispatch(hideLoading());
      if (
        error.response &&
        error.response.status >= 400 &&
        error.response.status <= 500
      ) {
        message.error(error.message);
      }
    }
  };

  return (
    <div className={loginCss.login_container}>
      <div className={loginCss.login_form_container}>
        <div className={loginCss.left}>
          <form className={loginCss.form_container} onSubmit={handleSubmit}>
            <h1>Login to Your Account</h1>
            <input
              type="email"
              placeholder="Email"
              name="email"
              onChange={handleChange}
              value={data.email}
              required
              className={loginCss.input}
            />
            <input
              type="password"
              placeholder="Password"
              name="password"
              onChange={handleChange}
              value={data.password}
              required
              className={loginCss.input}
            />
            {error && <div className={loginCss.error_msg}>{error}</div>}
            <button type="submit" className={loginCss.green_btn}>
              Sign In
            </button>
          </form>
          <Link to="/forgotPassword">
            <button type="button" className={loginCss.green_btn}>
              Forgot Password
            </button>
            </Link>
        </div>
        <div className={loginCss.right}>
          <h1>New Here ?</h1>
          <Link to="/signUp">
            <button type="button" className={loginCss.white_btn}>
              Sign Up
            </button>
          </Link>

          

        </div>
      </div>
    </div>
  );
};

export default Login;
