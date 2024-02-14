import axios from "axios";
import React, { useEffect, useRef, useState } from "react";
import { useParams } from "react-router-dom";
import moment from "moment";
import { DatePicker, TimePicker, message } from "antd";
import { useDispatch, useSelector } from "react-redux";
import { hideLoading, showLoading } from "../../redux/features/alert";

const BookingPage = () => {
  const [mentor, setMentor] = useState();
  const params = useParams();
  const [date, setDate] = useState();
  const [time, setTime] = useState();
  const [isAvailable, setIsAvailable] = useState(<true></true>);
  const dispatch = useDispatch();
  const { user } = useSelector((state) => state.user);
  const dateRef=useRef()
  const disabledDate = (current) => {
    // Disable all dates before today
    return current && current < moment().startOf("day");
  };
  const handleBooking = async () => {
  
    try {

      setIsAvailable(true)
      if(!date && !time){
        return alert("Date and Time required")
      }


      
      await axios
        .post(
          "http://localhost:8080/api/v1/user/bookAppointment",
          {
            mentorId: params.mentorId,
            userId: user._id,
            mentorInfo: mentor,
            date: date,
            time: time,
            userInfo: user,
          },
          {
            headers: {
              Authorization: "Bearer " + localStorage.getItem("token"),
            },
          }
        )
        .then((res) => {
    
          if (res.data.success) {
            message.success(res.data.message);
          }
        });
    } catch (error) {
       message.error("Cannot book this date/time")
      console.log(error);
    }
  };
  const getData = async () => {
    await axios
      .post(
        `http://localhost:8080/api/v1/mentor/getMentorById`,
        {
          mentorId: params.mentorId,
        },
        {
          headers: {
            Authorization: "Bearer " + localStorage.getItem("token"),
          },
        }
      )
      .then((res) => {
        if (res.data.success) {
          setMentor(res.data.data);
        }
      })
      .catch((error) => console.log(error));
  };

  useEffect(() => {
    getData();
  }, []);

  const handleAvailability = async () => {
    try {
   
      await axios
        .post(
          "http://localhost:8080/api/v1/user/bookingAvailability",
          {
            mentorId: params.mentorId,
            date,
            time,
          },
          {
            headers: {
              Authorization: "Bearer " + localStorage.getItem("token"),
            },
          }
        )
        .then((res) => {
          if (res.data.success) {
            setIsAvailable(true)
            dateRef.current=date
            message.success(res.data.message);
         
          } else {
            message.error(res.data.message);
          }
        });
    } catch (error) {
    console.log(error);
    }
  };

  return (
    <>
      <h1>BookingPage</h1>
      <div className="container">
        {mentor && (
          <>
            <h4>
              Mentor : {mentor.firstName} {mentor.lastName}
            </h4>

            <h4>Fees: {mentor.feesPerConsultation}</h4>
            <h4>
              Timings: {moment(mentor.timings[0], "HH:mm").format("HH:mm")}-
              {moment(mentor.timings[1], "HH:mm").format("HH:mm")}
            </h4>
            <div className="d-flex flex-column w-50">
              <DatePicker
                format="DD-MM-YYYY"
                className="m-2"
                onChange={(value) => {
                   setIsAvailable(false)
                  setDate(moment(value).format("DD-MM-YYYY"));
                }}
                disabledDate={disabledDate}
                ref={dateRef}
              
              
              />
              <TimePicker
                format="HH:mm"
                className="m-2"
                onChange={(value) => {
                   setIsAvailable(false)
                  setTime(value)}}
                  
              />
              <button
                className="btn btn-primary mt-2 "
                onClick={handleAvailability}
              >
                Check Availability
              </button>
                  
                  { isAvailable &&(   
                    <button className="btn btn-dark mt-2" onClick={handleBooking}>
                  Book Now
                </button>)

                  }
                
            
            </div>
          </>
        )}
      </div>
    </>
  );
};

export default BookingPage;
