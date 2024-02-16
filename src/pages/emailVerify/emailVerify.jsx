import { useEffect, useState } from "react";
import styles from "./emailVerify.module.css";
import axios from "axios";
import { Link, useParams } from "react-router-dom";
import success from "../../images/successImg.png";
import { useDispatch } from "react-redux";
import { hideLoading, showLoading } from "../../redux/features/alert";

const EmailVerify = () => {
  const [validUrl, setValidUrl] = useState(false);
  const params = useParams();
  // const dispatch=useDispatch()
  const verifyEmailUrl = async () => {
    try {
      // dispatch(showLoading())
      const url = `https://wisdomkart-server.onrender.com/api/v1/user/${params.id}/verify/${params.token}`;
      const { data } = await axios.get(url);
      // dispatch(hideLoading())
      console.log("axios part done");
      console.log(data);
      setValidUrl(true);
    } catch (error) {
      // dispatch(hideLoading())
      console.log(error);
      setValidUrl(false);
    }
  };

  

  useEffect(() => {
    verifyEmailUrl();
  }, [params]);

  return (
    <>
      {validUrl ? (
        <div className={styles.container}>
          <img src={success} className={styles.success_img} />
          <h1>Email verified sucessfully</h1>
          <Link to="/login">
            <button className={styles.green_btn}></button>
          </Link>
        </div>
      ) : (
        <h1>404 Not found</h1>
      )}
    </>
  );
};

export default EmailVerify;
