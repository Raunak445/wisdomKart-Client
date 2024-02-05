import React from 'react';
import './timeSlots.css'; // Import your CSS file

const TimeSlots = () => {
  // Generate time slots dynamically
  const generateTimeSlots = () => {
    const timeSlots = [];

    for (let hour = 8; hour <= 22; hour++) {
      for (let minute = 0; minute < 60; minute += 30) {
        const time = `${hour}:${minute === 0 ? '00' : minute}`;
        timeSlots.push(<button key={time} className="time-slot">{time}</button>);
      }
      
    
    }

    return timeSlots;
  };

  return (
    <div className="time-slots">
      {generateTimeSlots()}
    </div>
  );
};

export default TimeSlots;
