import React from "react";
import { Tabs, message } from "antd";
import style from './notification.module.css';
import { useDispatch, useSelector } from "react-redux";
import { hideLoading, showLoading } from "../../redux/features/alert";
import axios from "axios";
import { useNavigate } from "react-router-dom";


const Notification = () => {
  const dispatch = useDispatch();
  const navigate= useNavigate()

  const handleMarkAllRead = async () => {
    try {
      dispatch(showLoading());
      const res = await axios.post(
        "http://localhost:8080/api/v1/user/getAllNotification",
        { userId: user._id },{
          headers:{
            Authorization:"Bearer "+localStorage.getItem('token')
          }
        }
      );
      dispatch(hideLoading());
      if (res.data.success) {message.success(res.data.message);
      window.location.reload()}
      else {
        message.error(res.data.message);
      }
    } catch (error) {
      dispatch(hideLoading())
      console.log(error);
      message.error("Something went wrong");
    }
  };

  const handleDeleteAllRead = async() => {
    try {
      dispatch(showLoading())
      const res =await axios.post('http://localhost:8080/api/v1/user/deleteAllNotification',{userId:user._id},{
        headers:{
          Authorization:"Bearer "+localStorage.getItem('token')
        }
      })

      dispatch(hideLoading())
      if(res.data.success){
        message.success(res.data.message)
        window.location.reload()

      }
      else message.error(res.data.message)
      
    } catch (error) {
      dispatch(hideLoading())
      console.log(error)
      message.error('Something went wrong while deleting notifications ')
    }
  };

  const { user } = useSelector((state) => state.user);

  return (
    <div className={style.wrapper}>
      <h1 className={style.noti}>Notification</h1>
      <Tabs>
        <Tabs.TabPane tab="Unread" key={0}>
        <div className={style.markWrapper}>

        
          <h4 className={style.mark} onClick={handleMarkAllRead}>
            Mark All Read
          </h4>
          </div>

          {user?.notification.map((m) => (
            <div className={style.card}  >
              <div className={style.cardText}  onClick={()=>navigate(m.onClickPath)}>{m.message}</div>
            </div>
          ))}
        </Tabs.TabPane>
        <Tabs.TabPane tab="Read" key={1}>
        <div className={style.markWrapper}>
          <h4 className={style.mark} onClick={handleDeleteAllRead}>
            Delete All Read
          </h4>
          </div>
          {user?.seenNotification.map((m) => (
            <div className={style.card}  >
              <div className={style.cardText}  onClick={()=>navigate(m.onClickPath)}>{m.message}</div>
            </div>
          ))}


        </Tabs.TabPane>
      </Tabs>
    </div>
  );
};

export default Notification;
