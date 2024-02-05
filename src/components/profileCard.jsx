import React from "react";
import ProfileCss from "./profileCard.module.css";
import { useNavigate } from "react-router-dom";
const ProfileCard = ({
  image,
  name,
  designation,
  intro,
  achievement,
  experience,
}) => {
  const navigate = useNavigate();

  const onClickPrice = (name) => {
    navigate(`/findMentor/${name}`);
  };

  const onClickProfile = (name) => {
    navigate(`/findMentor/profile/${name}`, { state: { name} });
  };
  return (
    <div className={ProfileCss.personCard}>
      <img src={image} alt={name} className={ProfileCss.personImage} />

      <div className={ProfileCss.personDetails}>
        <h2 className={ProfileCss.personName}>{name}</h2>
        <p className={ProfileCss.personDesignation}>{designation}</p>
        <p className={ProfileCss.personIntro}>{intro}</p>

        <div className={ProfileCss.wrapper}>
          <p className={ProfileCss.personAchievement}>{achievement}</p>
          <p className={ProfileCss.personExperience}>{experience} </p>
        </div>

        <div className={ProfileCss.buttonsWrapper}>
          <button
            className={ProfileCss.profileButton}
            onClick={() => onClickProfile(name)}
          >
            View Complete profile
          </button>
          <button
            className={ProfileCss.priceButton}
            onClick={() => onClickPrice(name)}
          >
            See Pricing & Availability
          </button>
        </div>
      </div>
    </div>
  );
};

export default ProfileCard;
