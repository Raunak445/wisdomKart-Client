import { useEffect, useState } from "react";
import PriceCss from "./price.module.css"; // Import the CSS file for styling
import { hideLoading, showLoading } from "../../redux/features/alert";
// import profile1 from "../findMentor/PRRameshProfile.png";
import Calendar from "react-calendar";
import "react-calendar/dist/Calendar.css";
import axios from "axios";
import { useParams } from "react-router-dom";
import moment from "moment";
import { Select, Spin, message } from "antd";
import { useDispatch, useSelector } from "react-redux";
import ProfileCard from "../../components/profileCard";

import logo from "../../components/1.png";

import { Modal } from "antd";

import { useNavigate } from "react-router-dom";
const { Option } = Select;

const today = new Date(); // Get today's date
today.setHours(0, 0, 0, 0); // Set the time to 00:00:00:000

const Price = () => {
  const [selectedDate, setSelectedDate] = useState(today);
  const [bookedTimings, setBookedTimings] = useState([]);
  const [timeSlots, setTimeSlots] = useState([]);
  const [mentor, setMentor] = useState(undefined);
  const [selectedArea, setSelectedArea] = useState([]);
  const [selectedIndustry, setSelectedIndustry] = useState([]);

  const [loading, setLoading] = useState(false);

  const [selectedButtonIndex, setSelectedButtonIndex] = useState(null);

  const [appointmentTime, setAppointmentTime] = useState(null);

  function convert12(time) {
    // Check correct time format and split into components
    time = time
      .toString()
      .match(/^([01]\d|2[0-3])(:)([0-5]\d)(:[0-5]\d)?$/) || [time];

    if (time.length > 1) {
      // If time format correct
      time = time.slice(1); // Remove full string match value
      time[5] = +time[0] < 12 ? "AM" : "PM"; // Set AM/PM
      time[0] = +time[0] % 12 || 12; // Adjust hours
    }
    return time.join(""); // return adjusted time or original string
  }

  const dateChangeHandler = (date) => {
    // console.log("date",date)
    setSelectedButtonIndex(undefined);
    // console.log(selectedButtonIndex)

    setSelectedDate(date);
  };

  const { user } = useSelector((state) => state.user);

  function generateCombinedISOString(dateISOString, timeISOString) {
    // Parse ISO strings into Date objects
    const dateObject = new Date(dateISOString);
    const timeObject = new Date(timeISOString);

    // Extract date components
    const year = dateObject.getFullYear();
    const month = dateObject.getMonth();
    var day = dateObject.getDate();

    // Extract time components
    const hours = timeObject.getUTCHours();
    const minutes = timeObject.getUTCMinutes();
    const seconds = timeObject.getUTCSeconds();

    // if (hours > 12) {
    //   day -= 1;
    // }

    // Create a new Date object with combined date and time components
    const combinedDate = new Date(
      Date.UTC(year, month, day, hours, minutes, seconds)
    );

    // Get ISO string representation of the combined Date object
    const combinedISOString = combinedDate.toISOString();

    return combinedISOString;
  }

  const handleButtonClick = (index) => {
    // console.log("ISO Time",oneHourSlots[index].ISOTime)
    const time = generateCombinedISOString(
      selectedDate,
      oneHourSlots[index].ISOTime
    );

    setAppointmentTime(time);
    // const d1 = new Date(time);
    // const cd = d1.toLocaleDateString().replace(/\//g, "-");
    // console.log("time", cd);

    setSelectedButtonIndex(index);
  };

  // console.log("mentor",mentor)

  const { id } = useParams();

  const tileDisabled = ({ activeStartDate, date, view }) => {
    // Disable dates after the next month
    if (
      view === "month" &&
      date >
        new Date(
          activeStartDate.getFullYear(),
          activeStartDate.getMonth() + 1,
          0
        )
    ) {
      return true;
    }
  };

  const maxDate = new Date(
    new Date().getFullYear(),
    new Date().getMonth() + 2,
    0
  );

  const navigate = useNavigate();

  useEffect(() => {
    axios
      .post("https://wisdomkart-server.onrender.com/api/v1/mentor/getMentor", {
        mentorId: id,
      })
      .then((res) => {
        if (res.data.success) {
          setMentor(res.data.mentor);
          // console.log(mentor);
        } else {
          message.error("Mentor not found");
        }
      });
  }, []);

  const fetchTimeSlots = async () => {
    try {
      setLoading(true);
      // dispatch(showLoading());
      // console.log("called again")
      const response = await axios.post(
        `https://wisdomkart-server.onrender.com/api/v1/mentor/getSlots?date=${selectedDate.toISOString()}`,
        {
          id,
        }
      );

      setLoading(false);
      if (response.data.success) {
        setTimeSlots(response.data.timeSlots);
        setBookedTimings(response.data.bookings);
      } else {
        message.error(response.data.message);
      }
    } catch (error) {
      // console.log(error.response.status)

      if (error.response.status === 500) {
        message.error("Server Error please try again ");
      } else {
        message.error(error.message);
      }

      // console.error("Error fetching time slots:", error);
    }
  };

  useEffect(() => {
    // console.log("Use Effect Called",selectedDate)
    fetchTimeSlots();
  }, [selectedDate]);

  const handleBookSession = () => {
    if (!selectedDate || !appointmentTime) {
      message.error("Please select Date and Time");
      return;
    }

    if (selectedArea.length === 0 || selectedIndustry.length === 0) {
      message.error("Please select Area and Industry of mentorship");
      return;
    }

    Modal.confirm({
      title: "Confirm Booking",
      content: (
        <div>
          <p>Selected Date: {selectedDate.toDateString()}</p>
          <p>Selected Time: {convert12(formatTime(appointmentTime))}</p>
          <p>Selected Area: {selectedArea.join(", ")}</p>
          <p>Selected Industry: {selectedIndustry.join(", ")}</p>
        </div>
      ),
      onOk() {
        // console.log("Send axios request here");
        // console.log("Date", selectedDate);
        // console.log("Time", appointmentTime);
        // console.log("Selected Area", selectedArea);
        // console.log("Selected Industry", selectedIndustry);

        const checkoutHandler = async () => {
          const {
            data: { key },
          } = await axios.get(
            "https://wisdomkart-server.onrender.com/api/v1/getKey"
          );

          const {
            data: { order },
          } = await axios.post(
            "https://wisdomkart-server.onrender.com/api/v1/checkout",
            {
              amount: mentor.feesPerConsultation,
            }
          );

          console.log(order.amount);

          var options = {
            key: key, // Enter the Key ID received from backend
            amount: order.amount, // Amount is in currency subunits. Default currency is INR. Hence, 50000 refers to 50000 paise
            currency: "INR",
            name: "Wisdomkart",
            description: "Test Transaction",
            image: "https://i.postimg.cc/Zn2MGNsp/1.png",
            order_id: order.id,
            handler: async (response) => {
              try {
                const verifyUrl =
                  "https://wisdomkart-server.onrender.com/api/v1/paymentverification";
                const { data } = await axios.post(verifyUrl, response);
                // console.log(data);

                if (data.success) {
                  navigate("/");
                  alert(
                    "Your appointment is confirmed, Please refer your registered email for more details"
                  );
                  // https://wisdomkart-server.onrender.com
                  axios
                    .post(
                      "https://wisdomkart-server.onrender.com/api/v1/mentor/booking",
                      {
                        id,
                        appointmentTime,
                        selectedDate,
                        selectedArea,
                        selectedIndustry,
                        user,
                      }
                    )
                    .then((res) => {
                      if (res.data.success) {
                        message.success(res.data.message);
                      }
                    })
                    .catch((error) => {
                      // dispatch(hideLoading());
                      message.error(error.message);
                    });

                  // window.location.reload()
                } else {
                  message.error({
                    content: "Payment not received , please try again",
                    duration: 5, // Duration in seconds
                    style: {
                      fontSize: "18px", // Adjust the font size as needed
                    },
                  });
                }
              } catch (error) {
                console.log(error);
              }
            },
            // callback_url: "http://localhost:8080/api/v1/xpaymentverification",
            prefill: {
              name: `${user.firstName} ${user.lastName}`,
              email: user.email,
              phone: user.phone,
            },
            notes: {
              address: "Razorpay Corporate Office",
            },
            theme: {
              color: "#3399cc",
            },
          };

          try {
            const razor = new window.Razorpay(options);

            razor.open();

            //   razor.on("payment.success", function (response) {
            //     console.log("Payment successful!", response);

            //     axios
            //       .post(
            //         "https://wisdomkart-server.onrender.com/api/v1/mentor/booking",
            //         {
            //           id,
            //           appointmentTime,
            //           selectedDate,
            //           selectedArea,
            //           selectedIndustry,
            //           user,
            //         }
            //       )
            //       .then((res) => {
            //         if (res.data.success) {
            //           message.success(res.data.message);
            //         }
            //       })
            //       .catch((error) => {
            //         // dispatch(hideLoading());
            //         message.error(error.message);
            //       });
            //   }

            // );

            //   razor.on('payment.error', function (error) {
            //     // Handle payment error here
            //     console.error('Payment error:', error);
            //     // Optionally, reload the page or show an error message to the user
            //     window.location.reload();
            //     message.error("Error while processing payment");
            // });
          } catch (error) {
            window.location.reload();
            message.error("Error while loading the payment gateway");
          }

          // e.preventDefault();
        };

        if (user.orders != 0) {
          checkoutHandler();
        } else {
          // navigate("/");

          alert(
            "Your appointment is confirmed, Please refer your registered email for more details "
          );

          axios
            .post(
              "https://wisdomkart-server.onrender.com/api/v1/mentor/booking",
              {
                id,
                appointmentTime,
                selectedDate,
                selectedArea,
                selectedIndustry,
                user,
              }
            )
            .then((res) => {
              if (res.data.success) {
                message.success(res.data.message);
              }
            })
            .catch((error) => {
              // dispatch(hideLoading());
              message.error(error.message);
            });
        }

        Modal.destroyAll();
      },
    });
  };

  function formatTime(timeString) {
    // Parse the time string using moment
    const parsedTime = moment(timeString);

    // Extract the time in "HH:mm" format
    const formattedTime = parsedTime.format("HH:mm");

    return formattedTime;
  }

  const generateTimeSlots = (startTime, endTime, bookedTimings) => {
    let slots = [];
    let currentTime = new Date(startTime);

    while (currentTime < new Date(endTime)) {
      const nextHour = new Date(currentTime);
      nextHour.setHours(nextHour.getHours() + 1);

      var slotStartTime = currentTime.toISOString();
      var slotEndTime = nextHour.toISOString();

      const slotStartTimeISO = slotStartTime;
      // const dateTime = new Date(slotStartTimeISO);
      // const date = dateTime.toLocaleDateString().replace(/\//g, "-");

      // console.log("date",date)

      slotStartTime = formatTime(slotStartTime);

      // console.log("sample",formatTime("2024-04-09T03:00:00.000Z"))

      slotEndTime = formatTime(slotEndTime);

      // console.log('slotStartTime',slotStartTime)

      // Check if the current time slot is not in the bookedTimings array
      // const d=new Date(selectedDate)
      // console.log("date",d.getDay())
      const d1 = new Date(selectedDate);
      const cd = d1.toLocaleDateString().replace(/\//g, "-");

      const isBooked = bookedTimings.some((timing) => {
        const d = new Date(timing);
        const bd = d.toLocaleDateString().replace(/\//g, "-");
        // console.log(bd);
        // console.log(cd);
        // console.log("true", slotStartTime === timing && cd === bd);
        timing = formatTime(timing);

        // console.log("timing", timing);
        //i have make sure date is also same for not showing time
        return slotStartTime === timing && cd === bd;
      });

      if (!isBooked) {
        // if(slotStartTime<currentTime){
        //   continue;
        // }

        slots.push({
          startTime: slotStartTime,
          endTime: slotEndTime,
          ISOTime: slotStartTimeISO,
        });
      }

      currentTime = nextHour;
    }

    // console.log("result", slots);

    return slots;
  };
  const getTime = () => {
    const currentDate = new Date();
    const hours = currentDate.getHours();
    const minutes = currentDate.getMinutes();

    // Pad single digit numbers with a leading zero
    const formattedHours = String(hours).padStart(2, "0");
    const formattedMinutes = String(minutes).padStart(2, "0");

    const currentTime = `${formattedHours}:${formattedMinutes}`;
    return currentTime;
  };

  function getTimeAsNumberOfMinutes(time) {
    const [hours1, minutes1] = time.split(":").map(Number);
    var timeInMinutes = hours1 * 60 + minutes1;
    return timeInMinutes;
  }

  // Generate one-hour time slots
  var oneHourSlots = generateTimeSlots(
    timeSlots[0],
    timeSlots[1],
    bookedTimings
  );

  return (
    <div className={PriceCss.wrapper}>
      <div className={PriceCss.wrapperLeft}>
        <div className={PriceCss.boxSection}>
          {mentor && (
            <div className={PriceCss.card}>
              <ProfileCard
                key={mentor._id} // Ensure each component has a unique key
                image={mentor.image}
                name={`${mentor.firstName} ${mentor.lastName}`}
                intro={mentor.biodata}
                experience={`${mentor.experience} years`}
                id={mentor._id} // Pass mentor's ID as the id prop
                industry={mentor.industry}
                area={mentor.area}
                button={false}
                displaydata={mentor.displaydata}
              />
            </div>
          )}
        </div>

        <div className={PriceCss.reviews}></div>
      </div>

      <div className={PriceCss.wrapperRight}>
        <div className={PriceCss.calendar}>
          <div
            style={{
              backgroundColor: "lightblue",
              borderRadius: "10px",
              padding: "10px",
            }}
          >
            <b style={{ fontSize: "20px", margin: "30px" }}>Hourly Charges</b>:{" "}
            <span className={PriceCss.h}>
              INR {mentor?.feesPerConsultation}
            </span>
          </div>

          <h1>Select a Date</h1>
          <Calendar
            // onChange={(date) => dateChangeHandler(date)}
            value={selectedDate}
            tileDisabled={tileDisabled}
            minDate={new Date()} // Disable dates before today
            maxDate={maxDate}
            onClickDay={(date) => dateChangeHandler(date)}
          />
        </div>

        <Select
          mode="multiple"
          placeholder="Please select Area of mentorship"
          value={selectedArea}
          onChange={(values) => setSelectedArea(values)}
          style={{ width: "100%", color: "black", margin: "10px" }}
        >
          {mentor?.area?.map((area) => (
            <Option key={area} value={area}>
              {area}
            </Option>
          ))}
        </Select>
        <Select
          mode="multiple"
          placeholder="Please select Industry of mentorship"
          value={selectedIndustry}
          onChange={(values) => setSelectedIndustry(values)}
          style={{ width: "100%", color: "black", margin: "10px" }}
        >
          {mentor?.industry?.map((industry) => (
            <Option key={industry} value={industry}>
              {industry}
            </Option>
          ))}
        </Select>

        {loading ? (
          <div className={PriceCss.loading}>
            <Spin size="large" />
          </div>
        ) : oneHourSlots.length === 0 ? (
          <div className={PriceCss.warningText}>
            Sorry no slots are available!
          </div>
        ) : (
          <div className={PriceCss.timeSlots}>
            {oneHourSlots.map((slot, index) => {
              {
                /* console.log("slot", getTimeAsNumberOfMinutes(slot.startTime));
              console.log("time", getTimeAsNumberOfMinutes(getTime()));
              console.log("Starttime",slot.startTime) */
              }

              return (
                <div
                  key={index}
                  className={PriceCss.buttonWrapper}
                  style={
                    new Date().getDate() === selectedDate.getDate() &&
                    getTimeAsNumberOfMinutes(slot.startTime) <
                      getTimeAsNumberOfMinutes(getTime())
                      ? { display: "none" }
                      : {}
                  }
                >
                  <button
                    key={index}
                    className={`${PriceCss.button} ${
                      selectedButtonIndex === index ? PriceCss.blueButton : ""
                    }`}
                    onClick={() => handleButtonClick(index)}
                  >
                    {convert12(slot.startTime)}
                  </button>
                </div>
              );
            })}
          </div>
        )}

        {user?._id !== mentor?.userId && (
          <div className={PriceCss.bookingSection}>
            <h2>Book a Session</h2>

            <button onClick={handleBookSession} className={PriceCss.button}>
              Book Session
            </button>
          </div>
        )}
      </div>
    </div>
  );
};

export default Price;
