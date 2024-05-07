import React, { useRef, useState } from "react";
import { FaStar } from "react-icons/fa";
import "./ratingComponent.css"; // Import CSS file for styling
import { useNavigate, useParams } from "react-router-dom";
import { message } from "antd";
import axios from "axios";

const RatingComponent = () => {
  const [rating, setRating] = useState(0);
  const [reason, setReason] = useState("");
  const [showReason, setShowReason] = useState(false);
  const navigate=useNavigate()
  const feedbackRef = useRef(null);
  const params = useParams();
  const reasons = [
    "I didn't get right feedback for my problem",
    "Mentor was unable to understand my problem",
    " I was not clear about my issue or problem",
    "Planning to have one more session",
    "Others",
  ];

  const handleRatingChange = (value) => {
    setRating(value);
    if (value < 5) {
      setShowReason(true);
    } else {
      setShowReason(false);
    }
  };

  const handleReasonChange = (event) => {
    setReason(event.target.value);
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    const feedbackData = {
      rating: rating,
      reason: reason,
      feedback: feedbackRef.current.value,
      postId: params.postId,
    };
    try {
      const response = await axios.post(
        "https://wisdomkart-server.onrender.com/api/v1/user/rating",
        feedbackData
      );
      //console.log(response.data);
      //console.log(feedbackData)
      if (response.data.success) {
        message.success(response.data.message);
        navigate('/dashboard')
      }
    } catch (error) {
      console.error("Error submitting feedback:", error);
    }
  };
  return (
    <div className="rating-container">
      <div className="stars-container">
        {[...Array(5)].map((_, index) => {
          const value = index + 1;
          return (
            <FaStar
              size="50px"
              key={value}
              className={value <= rating ? "star-filled" : "star-empty"}
              onClick={() => handleRatingChange(value)}
            />
          );
        })}
      </div>

      {showReason && (
        <>
          <label htmlFor="reason" style={{ fontSize: "1.5rem" }}>
            Reason:
          </label>
          <select
            id="reason"
            value={reason}
            onChange={handleReasonChange}
            required
            // style={{ width: "100%" }}
          >
            <option value="">Select a reason</option>
            {reasons.map((reason) => (
              <option key={reason} value={reason}>
                {reason}
              </option>
            ))}
          </select>
        </>
      )}

      <textarea
        ref={feedbackRef}
        name="feedback"
        id="feedback"
        cols="30"
        rows="10"
        placeholder="Please write your feedback"
        className="rtfed"
      ></textarea>
      <button type="submit" className="btn btn-primary" onClick={handleSubmit}>
        Submit
      </button>
    </div>
  );
};

export default RatingComponent;
