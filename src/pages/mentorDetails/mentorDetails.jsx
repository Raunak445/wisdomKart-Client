import React from "react";
import { Card, Tag, Space, Typography } from "antd";
const { Text } = Typography;
import styles from "./mentorDetails.module.css";
import BinaryImage from "../../components/BinaryImage";
import moment from "moment";

const MentorDetails = ({ mentor }) => {
  const dataURL = `data:image/jpeg;base64,${mentor.image}`;
  function formatTime(timeString) {
    // Parse the time string using moment
    const parsedTime = moment(timeString);

    // Extract the time in "HH:mm" format
    const formattedTime = parsedTime.format("HH:mm");

    return formattedTime;
  }

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
  return (
    <Card
      className={styles.card}
      title={`${mentor.firstName} ${mentor.lastName}`}
    >
      <div className={styles.details}>
        <img
          src={dataURL}
          alt="Binary Image"
          style={{
            width: "200px",
            height: "200px",
            borderRadius: "10px",
            margin: "auto",
          }}
        />
        <p>
          <Text className={styles.label}>Email:</Text> {mentor.email}
        </p>
        <p>
          <Text className={styles.label}>Phone:</Text> {mentor.phone}
        </p>
        <p>
          <Text className={styles.label}>Address:</Text> {mentor.address}
        </p>
        <p>
          <Text className={styles.label}>Experience:</Text> {mentor.experience}
        </p>
        <p>
          <Text className={styles.label}>Fees per Consultation:</Text>{" "}
          {mentor.feesPerConsultation}
        </p>

        <p>
          <Text className={styles.label}>BioData:</Text> {mentor.biodata}
        </p>

        <p>
          <Text className={styles.label}>
            Brief Profile:
          </Text>{" "}
          {mentor.displaydata}
        </p>

        <p>
          <Text className={styles.label}>Status:</Text> {mentor.status}
        </p>
        <p>
          <Text className={styles.label}>Areas of Expertise:</Text>{" "}
          {mentor.area.join(", ")}
        </p>
        <p>
          <Text className={styles.label}>Industries:</Text>{" "}
          {mentor.industry.join(", ")}
        </p>

        {mentor.mondayTime ? (
          <p>
            <Text className={styles.label}>Monday Timings:</Text>{" "}
            {convert12(formatTime(mentor.mondayTime[0]))} -
            {convert12(formatTime(mentor.mondayTime[1]))}{" "}
          </p>
        ) : (
          <div style={{ marginTop: "10px" }}>
            <Text className={styles.label}>Monday Timings:</Text> : Not
            available
          </div>
        )}

        {mentor.tuesdayTime ? (
          <p>
            <Text className={styles.label}>Tuesday Timings:</Text>{" "}
            {convert12(formatTime(mentor.tuesdayTime[0]))} -
            {convert12(formatTime(mentor.tuesdayTime[1]))}{" "}
          </p>
        ) : (
          <div style={{ marginTop: "10px" }}>
            <Text className={styles.label}>Tuesday Timings:</Text> : Not
            available
          </div>
        )}

        {mentor.wednesdayTime ? (
          <p>
            <Text className={styles.label}>Wednesday Timings:</Text>{" "}
            {convert12(formatTime(mentor.wednesdayTime[0]))} -
            {convert12(formatTime(mentor.wednesdayTime[1]))}{" "}
          </p>
        ) : (
          <div style={{ marginTop: "10px" }}>
            <Text className={styles.label}>Wednesday Timings:</Text> : Not
            available
          </div>
        )}

        {mentor.thursdayTime ? (
          <p>
            <Text className={styles.label}>Thursday Timings:</Text>{" "}
            {convert12(formatTime(mentor.thursdayTime[0]))} -
            {convert12(formatTime(mentor.thursdayTime[1]))}{" "}
          </p>
        ) : (
          <div style={{ marginTop: "10px" }}>
            <Text className={styles.label}>Thursday Timings:</Text> : Not
            available
          </div>
        )}

        {mentor.fridayTime ? (
          <p>
            <Text className={styles.label}>Friday Timings:</Text>{" "}
            {convert12(formatTime(mentor.fridayTime[0]))} -
            {convert12(formatTime(mentor.fridayTime[1]))}{" "}
          </p>
        ) : (
          <div style={{ marginTop: "10px" }}>
            <Text className={styles.label}>Friday Timings:</Text> : Not
            available
          </div>
        )}

        {mentor.saturdayTime ? (
          <p>
            <Text className={styles.label}>Saturday Timings:</Text>{" "}
            {convert12(formatTime(mentor.saturdayTime[0]))} -
            {convert12(formatTime(mentor.saturdayTime[1]))}{" "}
          </p>
        ) : (
          <div style={{ marginTop: "10px" }}>
            <Text className={styles.label}>Saturday Timings:</Text> : Not
            available
          </div>
        )}

        {mentor.sundayTime ? (
          <p>
            <Text className={styles.label}>Sunday Timings:</Text>{" "}
            {convert12(formatTime(mentor.sundayTime[0]))} -
            {convert12(formatTime(mentor.sundayTime[1]))}{" "}
          </p>
        ) : (
          <div style={{ marginTop: "10px" }}>
            <Text className={styles.label}>Sunday Timings:</Text> : Not
            available
          </div>
        )}
      </div>
    </Card>
  );
};

// const MentorList = ({ mentors }) => {
//   return (
//     <Space direction="vertical" style={{ padding: '20px' }}>
//       {mentors.map(mentor => (
//         <MentorCard key={mentor._id} mentor={mentor} />
//       ))}
//     </Space>
//   );
// };

export default MentorDetails;
