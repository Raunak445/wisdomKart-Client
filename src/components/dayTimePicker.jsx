import React from "react";
import { Form, TimePicker } from "antd";
import moment from "moment";

const DayTimePicker = ({ day, time, setTime, format }) => {
  return (
    <div>
      <h3>{day}</h3>
      <Form.Item>
        <TimePicker.RangePicker
          format={format}
          value={moment(time, format)}
          onChange={(value, dateString) => setTime(dateString)}
          style={{ width: "100%" }}
          placeholder={["Start Time", "End Time"]}
        />
      </Form.Item>
    </div>
  );
};

export default DayTimePicker;
