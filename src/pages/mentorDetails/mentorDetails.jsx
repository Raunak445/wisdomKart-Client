import React from 'react';
import { Card, Tag, Space, Typography } from 'antd';
const { Text } = Typography;
import styles from './mentorDetails.module.css' 

const MentorDetails = ({ mentor }) => {
  return (
<Card className={styles.card} title={`${mentor.firstName} ${mentor.lastName}`}>
      <div className={styles.details}>
        <p><Text className={styles.label}>Email:</Text> {mentor.email}</p>
        <p><Text className={styles.label}>Phone:</Text> {mentor.phone}</p>
        <p><Text className={styles.label}>Address:</Text> {mentor.address}</p>
        <p><Text className={styles.label}>Experience:</Text> {mentor.experience}</p>
        <p><Text className={styles.label}>Fees per Consultation:</Text> {mentor.feesPerConsultation}</p>
        <p><Text className={styles.label}>Status:</Text> {mentor.status}</p>
        <p><Text className={styles.label}>Areas of Expertise:</Text> {mentor.area.join(', ')}</p>
        <p><Text className={styles.label}>Industries:</Text> {mentor.industry.join(', ')}</p>
        <p><Text className={styles.label}>Timings:</Text> {JSON.stringify(mentor.timings)}</p>
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
