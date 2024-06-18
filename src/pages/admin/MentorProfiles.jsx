import axios from "axios";
import { useEffect, useState } from "react";
import { useCookies } from "react-cookie";
import { useNavigate } from "react-router-dom";

const MentorProfiles = () => {
  const [mentors, setMentors] = useState([]);
  const navigate = useNavigate();
  const [cookies] = useCookies(["token"]);

  const getMentors = async () => {
    try {
      await axios
        .get(
          "https://wisdomkart-server.onrender.com/api/v1/user/getAllMentors",
          {
            headers: {
              Authorization: "Bearer " + cookies.token,
            },
          }
        )
        .then((res) => {
          if (res.data.success) setMentors(res.data.data);
          // console.log(res.data.data);
        });
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getMentors();
  }, []);

  const handleMentorClick = (id) => {
    navigate(`/admin/mentorprofile/${id}`);
  };

  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        flexWrap: "wrap",
        gap: "10px",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      {mentors.map((mentor) => {
        {/* console.log(mentor); */}

        console.log(mentor)
        return (
          <div
            key={mentor._id}
            onClick={() => handleMentorClick(mentor.userId)}
            style={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              border: "1px solid #ccc",
              padding: "10px",
              borderRadius: "5px",
              cursor: "pointer",
              width: "300px",
              height: "100px",
              textAlign: "center",
              backgroundColor: "#CAF4FF",
            }}
          >
            {mentor.firstName} {mentor.lastName}
          </div>
        );
      })}
    </div>
  );
};

export default MentorProfiles;
