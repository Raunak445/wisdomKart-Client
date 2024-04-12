import { useEffect, useState } from "react";
import PriceCss from "./price.module.css"; // Import the CSS file for styling
import profile1 from "../findMentor/PRRameshProfile.png";
import Calendar from "react-calendar";
import "react-calendar/dist/Calendar.css";
import axios from "axios";
import { useParams } from "react-router-dom";
import moment from "moment";
import { message } from "antd";
import { useSelector } from "react-redux";
import ProfileCard from "../../components/profileCard";

import { useNavigate } from "react-router-dom";
const Price = () => {
  const [selectedDate, setSelectedDate] = useState(new Date());
  const [bookedTimings, setBookedTimings] = useState([]);
  const [timeSlots, setTimeSlots] = useState([]);
  const [mentor, setMentor] = useState(undefined);

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

    if (hours > 12) {
      day -= 1;
    }

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
    selectedDate.getFullYear(),
    selectedDate.getMonth() + 2,
    0
  );

  // const navigate = useNavigate();

  useEffect(() => {
    axios
      .post("http://localhost:8080/api/v1/mentor/getMentor", {
        mentorId: id,
      })
      .then((res) => {
        if (res.data.success) {
          setMentor(res.data.mentor);
          console.log(mentor);
        } else {
          message.error("Mentor not found");
        }
      });
  }, []);

  const fetchTimeSlots = async () => {
    try {
      const response = await axios.post(
        `http://localhost:8080/api/v1/mentor/getSlots?date=${selectedDate.toISOString()}`,
        {
          id,
        }
      );

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
    fetchTimeSlots();
  }, [selectedDate]);

  const handleBookSession = () => {
    if (selectedButtonIndex === undefined || selectedButtonIndex === null) {
      message.error("Please Select Time Slots");
    } else if (selectedDate === undefined || selectedDate === undefined) {
      message.error("Please select Date");
    } else {
      console.log("Send axios request here");
      axios
        .post("http://localhost:8080/api/v1/mentor/booking", {
          id,
          appointmentTime,
          selectedDate,
          user,
        })
        .then((res) => {
          if (res.data.success) {
            // navigate('/')
            message.success(res.data.message);
          }
        });
    }
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
            <ProfileCard
              key={mentor._id} // Ensure each component has a unique key
              image={mentor.image}
              name={`${mentor.firstName} ${mentor.lastName}`}
              designation="NA"
              intro={mentor.biodata}
              achievement="NA"
              experience={`${mentor.experience} years`}
              id={mentor._id} // Pass mentor's ID as the id prop
              industry={mentor.industry}
              area={mentor.area}
            />
          )}
         
        </div>

        <div className={PriceCss.reviews}></div>
      </div>

      <div className={PriceCss.wrapperRight}>
        <div className={PriceCss.bookingSection}>
          <h2>Book a Session</h2>

          <button onClick={handleBookSession} className={PriceCss.button}>
            Book Session
          </button>
        </div>

        <div className={PriceCss.calendar}>
          <h1>Select a Date</h1>
          <Calendar
            onChange={(date) => dateChangeHandler(date)}
            value={selectedDate}
            tileDisabled={tileDisabled}
            minDate={new Date()} // Disable dates before today
            maxDate={maxDate}
          />
        </div>
        {oneHourSlots.length == 0 ? (
          <div className={PriceCss.warningText}>
            {" "}
            Sorry no slots are available !
          </div>
        ) : (
          <div className={PriceCss.timeSlots}>
            {oneHourSlots.map((slot, index) => (
              <button
                key={index}
                className={`${PriceCss.button} ${
                  selectedButtonIndex === index ? PriceCss.blueButton : ""
                }`}
                onClick={() => handleButtonClick(index)}
              >
                {convert12(slot.startTime)}
              </button>
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default Price;
