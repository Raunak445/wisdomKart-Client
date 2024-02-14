import { useState } from "react";
import axios from "axios";
import { Link, useNavigate } from "react-router-dom";
import signUpCss from "./signUp.module.css";
import { message } from "antd";
import { hideLoading, showLoading } from "../../redux/features/alert";
import { useDispatch } from "react-redux";

const SignUp = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const [data, setData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    password: "",
  });
  const [error, setError] = useState("");
  const [msg,setMsg]=useState("")


  const handleChange = ({ currentTarget: input }) => {
    setData({ ...data, [input.name]: input.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    // dispatch(showLoading());
    try {
      const url = "http://localhost:8080/api/v1/user/signUp";
      const res = await axios.post(url, data);
      
      setMsg(res.data.message)

      if (res.data.success) {
        message.success("Please verify your email");
        // navigate("/login");
      } else {
        message.error("User already exist ");
      }

      // dispatch(hideLoading());
    } catch (error) {
      // dispatch(hideLoading());
      if (
        error.response &&
        error.response.status >= 400 &&
        error.response.status <= 500
      ) {
        setError(error.response.data.message);
        message.error(error.response.data.message);
      }
    }
  };

  return (
    <div className={signUpCss.signup_container}>
      <div className={signUpCss.signup_form_container}>
        <div className={signUpCss.left}>
          <h1>Welcome Back</h1>
          <Link to="/login">
            <button type="button" className={signUpCss.white_btn}>
              Sign in
            </button>
          </Link>
        </div>
        <div className={signUpCss.right}>
          <form className={signUpCss.form_container} onSubmit={handleSubmit}>
            <h1>Create Account</h1>
            <input
              type="text"
              placeholder="First Name"
              name="firstName"
              onChange={handleChange}
              value={data.firstName}
              required
              className={signUpCss.input}
            />
            <input
              type="text"
              placeholder="Last Name"
              name="lastName"
              onChange={handleChange}
              value={data.lastName}
              required
              className={signUpCss.input}
            />
            <input
              type="email"
              placeholder="Email"
              name="email"
              onChange={handleChange}
              value={data.email}
              required
              className={signUpCss.input}
            />
            <input
              type="password"
              placeholder="Password"
              name="password"
              onChange={handleChange}
              value={data.password}
              required
              className={signUpCss.input}
            />
            {error && <div className={signUpCss.error_msg}>{error}</div>}
            {msg && <div className={signUpCss.succsess_msg}>{msg}</div>}
            <button type="submit" className={signUpCss.green_btn}>
              Sign Up
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default SignUp;
