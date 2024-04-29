import ProfileCss from "./profileCard.module.css";
import { useNavigate } from "react-router-dom";
import BinaryImage from "./BinaryImage";
import LazyLoad from "react-lazyload";
const ProfileCard = ({
  image,
  name,
  intro,
  experience,
  id,
  industry,
  area,
  button = true,
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
    <LazyLoad height={200} offset={100}>
      <div className={ProfileCss.personCard}>
        <BinaryImage binaryImageData={image} />

        <div className={ProfileCss.personDetails}>
          <h2 className={ProfileCss.personName}>{name}</h2>
          {/* <p className={ProfileCss.personDesignation}>{designation}</p> */}
          <p className={ProfileCss.bio}>{intro}</p>

          <div className={ProfileCss.wrapper}>
            {/* <p className={ProfileCss.personAchievement}>{achievement}</p> */}
            <div className={ProfileCss.experience}>
              <b>Experience</b>:{" "}
              <span className={ProfileCss.text}>{experience}</span>{" "}
            </div>
          </div>

          <div className={ProfileCss.textWrapper}>
            <div className={ProfileCss.industry}>
              <b>Industry Specialization</b>:{" "}
              {industry.map((i, index) => (
                <span key={index}>
                  {i} {index !== industry.length - 1 && ","}{" "}
                </span>
              ))}
            </div>
            <div className={ProfileCss.area}>
              <b>Area Of Specialization</b>:
              {area.map((a, index) => (
                <span key={index}>
                  {a} {index !== area.length - 1 && ","}{" "}
                </span>
              ))}
            </div>
          </div>

          <div className={ProfileCss.buttonsWrapper}>
            {/* <button
            className={ProfileCss.profileButton}
            onClick={() => onClickProfile(id, name)}
          >
            View Complete profile
          </button> */}
            {button && (
              <button
                className={ProfileCss.priceButton}
                onClick={() => onClickPrice(id, name)}
              >
                Book an Appointment
              </button>
            )}
          </div>
        </div>
      </div>
    </LazyLoad>
  );
};

export default ProfileCard;
