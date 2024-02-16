import React, { useState } from "react";
import PriceCss from "./price.module.css"; // Import the CSS file for styling
import profile1 from "../findMentor/PRRameshProfile.png";
import Calendar from "react-calendar";
import "react-calendar/dist/Calendar.css";
import TimeSlots from "../../components/timeSlots";
const Price = () => {
  const [selectedDuration, setSelectedDuration] = useState(null);

  const handleDurationChange = (duration) => {
    setSelectedDuration(duration);
  };

  const [selectedDate, setSelectedDate] = useState(new Date());

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
    // Disable specific days of the week (e.g., Sundays and Wednesdays)
    // if (date.getDay() === 0 || date.getDay() === 3) {
    //   return true;
    // }
    // return false;
  };
  const maxDate = new Date(selectedDate.getFullYear(), selectedDate.getMonth() + 2, 0);

  const handleBookSession = () => {
    // Handle booking logic with the selectedDuration
    if (selectedDuration !== null) {
      console.log(`Book a ${selectedDuration}-hour session`);
      // Add your booking logic here
    } else {
      console.log("Please select a session duration");
    }
  };

  return (
    <div className={PriceCss.wrapper}>
      <div className={PriceCss.wrapperLeft}>
        <div className={PriceCss.boxSection}>
          <div className={PriceCss.leftSide}>
            <img src={profile1} alt="Profile" />
          </div>
          <div className={PriceCss.rightSide}>
            <h2>PR Ramesh</h2>
            <h3>
              VP & Principal Consultant - Seven Steps Business Transformation
              Systems
            </h3>
            <br />
            <p>
              <b>
                Mr. P R Ramesh- A Seasoned Consultant and Engineer with MBA in
                operation management- has 25+ years of experience working in
                Multinational organizations heading Operations, Quality and
                Business Excellence.
              </b>
            </p>
          </div>
        </div>

        <div className={PriceCss.reviews}></div>
      </div>

      <div className={PriceCss.wrapperRight}>
        <div className={PriceCss.bookingSection}>
          <h2>Book a Session</h2>

          <div className={PriceCss.sessionOptions}>
            <label className={PriceCss.label}>
              <input
                type="radio"
                value="1"
                checked={selectedDuration === "15"}
                onChange={() => handleDurationChange("15")}
              />
              <span>15 mins</span>
              <br />
              <span className={PriceCss.free}>Free Session</span>
            </label>

            <label className={PriceCss.label}>
              <input
                type="radio"
                value="1.5"
                checked={selectedDuration === "1"}
                onChange={() => handleDurationChange("1")}
              />
              1 hour
            </label>
          </div>

          <button onClick={handleBookSession} className={PriceCss.button}>
            Book Session
          </button>
        </div>

        <div className={PriceCss.calendar}>
          <h1>Select a Date</h1>
          <Calendar
            onChange={setSelectedDate}
            value={selectedDate}
            tileDisabled={tileDisabled}
            minDate={new Date()} // Disable dates before today
            maxDate={maxDate} 
           
            />
        </div>

        <div className="timeSlots">
          <TimeSlots/>
        </div>
        
      </div>
    </div>
  );
};

export default Price;
