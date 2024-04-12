import ProfileCss from "./profileCard.module.css";
import { useNavigate } from "react-router-dom";
import BinaryImage from "./BinaryImage";
const ProfileCard = ({
  image,
  name,
  intro,
  experience,
  id,
  industry,
  area,
}) => {
  const navigate = useNavigate();

  const onClickPrice = (id) => {
    navigate(`/findMentor/${id}`);
  };

  const onClickProfile = (id) => {
    navigate(`/findMentor/profile/${id}`);
  };

  // console.log(experience);

  return (
    <div className={ProfileCss.personCard}>
      <BinaryImage binaryImageData={image} />

      <div className={ProfileCss.personDetails}>
        <h2 className={ProfileCss.personName}>{name}</h2>
        {/* <p className={ProfileCss.personDesignation}>{designation}</p> */}
        <p className={ProfileCss.text}>{intro}</p>

        <div className={ProfileCss.wrapper}>
          {/* <p className={ProfileCss.personAchievement}>{achievement}</p> */}
          <p className={ProfileCss.personExperience}>
            Experience: {experience}{" "}
          </p>
        </div>

        <div className={ProfileCss.textWrapper}>
          <div className={ProfileCss.text}>
            Industry Specialization:{" "}
            {industry.map((i, index) => (
              <span key={index}>
                {i} {index !== industry.length - 1 && ","}{" "}
              </span>
            ))}
          </div>
          <div className={ProfileCss.text}>
            Area Of Specialization:{" "}
            {area.map((a, index) => (
              <span key={index}>
                {a} {index !== area.length - 1 && ","}{" "}
              </span>
            ))}
          </div>
        </div>

        <div className={ProfileCss.buttonsWrapper}>
          <button
            className={ProfileCss.profileButton}
            onClick={() => onClickProfile(id, name)}
          >
            View Complete profile
          </button>
          <button
            className={ProfileCss.priceButton}
            onClick={() => onClickPrice(id, name)}
          >
            See Pricing & Availability
          </button>
        </div>
      </div>
    </div>
  );
};

export default ProfileCard;
