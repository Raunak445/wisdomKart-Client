import ProfileCard from "../../components/profileCard";
// import profile1 from "./PRRameshProfile.png";
import findMentorCss from "./findMentor.module.css";
// import FilterDropDown from "../../components/filterDropDown";
import { useNavigate } from "react-router-dom";
import { useEffect, useRef, useState } from "react";
import axios from "axios";
import Select from "react-select";
import LazyLoad from "react-lazyload";
import { css } from "@emotion/react";
import { CircleLoader, DotLoader } from "react-spinners";


const FindMentor = () => {
  const [mentors, setMentors] = useState([]);
  const [display, setDisplay] = useState([]);
  const [selectedOptionArea, setSelectedOptionArea] = useState(null);
  const [selectedOptionIndustry, setSelectedOptionIndustry] = useState(null);
  const [loading, setLoading] = useState(false);


  const selectInputRefArea = useRef();
  const selectInputRefIndustry = useRef();

  const clearFilter = () => {
    setSelectedOptionArea(null);
    selectInputRefArea.current.clearValue();
    setSelectedOptionIndustry(null);
    selectInputRefIndustry.current.clearValue();
    setDisplay(mentors);
  };

  useEffect(() => {}, [display]);

  const onIndstryChange = (industry) => {
    // console.log("v",industry.label)

    // we need to option chainging as this is will also run when we click clear filter
    setSelectedOptionIndustry(industry?.label);
  };

  useEffect(() => {
    // console.log("selected", selectedOptionIndustry);

    const filteredMentors = mentors.filter((mentor) =>
      mentor.industry.includes(selectedOptionIndustry)
    );

    // console.log("Mentor",mentors[0].industry)
    console.log(filteredMentors);

    if (selectedOptionIndustry) setDisplay(filteredMentors);
  }, [selectedOptionIndustry]);

  const onAreaChange = (area) => {
    setSelectedOptionArea(area?.label);
    // console.log(area?.label);
  };

  useEffect(() => {
    // console.log("selected", selectedOptionArea);

    const filteredMentors = mentors.filter((mentor) => {
      console.log(mentor.area);
      return mentor.area.includes(selectedOptionArea);
    });

    // console.log("Mentor",mentors[0].industry)
    console.log(filteredMentors);

    if (selectedOptionArea) setDisplay(filteredMentors);
  }, [selectedOptionArea]);

  // console.log("rendered");

  const areaOptions = [
    { value: "Leadtime/TAT reduction", label: "Leadtime/TAT reduction" },
    { value: "Inventory Management", label: "Inventory Management" },
    { value: "Quality Improvement", label: "Quality Improvement" },
    { value: "Productivity Improvement", label: "Productivity Improvement" },
    { value: "Cost Reduction", label: "Cost Reduction" },
    { value: "Work Culture Improvement", label: "Work Culture Improvement" },
    { value: "Employee Engagement", label: "Employee Engagement" },
    { value: "People development", label: "People development" },
    { value: "Delivery Management", label: "Delivery Management" },
    {
      value: "Asset/Equipment Management",
      label: "Asset/Equipment Management",
    },
    {
      value: "Machine Breakdown reduction",
      label: "Machine Breakdown reduction",
    },
    {
      value: "Safety, Health & Environment",
      label: "Safety, Health & Environment",
    },
    {
      value: "Professional /Career Growth",
      label: "Professional /Career Growth",
    },
    { value: "Visual Management", label: "Visual Management" },
    { value: "Process Management", label: "Process Management" },
    { value: "Goal setting", label: "Goal setting" },
    { value: "Business Strategies", label: "Business Strategies" },
    { value: "Value Stream Management", label: "Value Stream Management" },
    { value: "Startup Coaching", label: "Startup Coaching" },
    { value: "Business Turnaround", label: "Business Turnaround" },
    { value: "Business Plan", label: "Business Plan" },
    { value: "Mid Career Growth", label: "Mid Career Growth" },
  ];

  const industryOptions = [
    { value: "aerospace_defence", label: "Aerospace/Defence" },
    { value: "automotive", label: "Automotive" },
    { value: "food", label: "Food" },
    { value: "pharma", label: "Pharma" },
    { value: "retail", label: "Retail" },
    { value: "education", label: "Education" },
    { value: "healthcare", label: "Healthcare" },
    {
      value: "restaurants_hotels_hospitality",
      label: "Restaurants/Hotels/Hospitality",
    },
    { value: "healthcare_hospitals", label: "Healthcare/Hospitals" },
    { value: "supply_chain_logistics", label: "Supply Chain & Logistics" },
    { value: "real_estate_construction", label: "Real estate/Construction" },
    { value: "heavy_machineries", label: "Heavy Machineries" },
    { value: "foundry", label: "Foundry" },
    { value: "forging", label: "Forging" },
    { value: "banking_finance", label: "Banking & Finance" },
    { value: "agriculture", label: "Agriculture" },
    { value: "it_ites_software", label: "IT/ITES/Software" },
    { value: "service_industry", label: "Service Industry" },
    { value: "general_engineering", label: "General Engineering" },
    { value: "ngo", label: "NGO" },
    { value: "government", label: "Government" },
    { value: "packaging", label: "Packaging" },
    {
      value: "apparel_garment_manufacturing",
      label: "Apparel/Garment Manufacturing",
    },
    { value: "textile", label: "Textile" },
    { value: "chemical_manufacturing", label: "Chemical Manufacturing" },
    { value: "energy_power", label: "Energy/Power" },
  ];

  const navigate = useNavigate();

  const onClickHandler = () => {
    navigate("/bookMentor");
  };

  const fetchMentors = async () => {
    setLoading(true);
    try {
      const res = await axios.get("https://wisdomkart-server.onrender.com/api/v1/mentor/getAllMentors");
      if (res.data.success) {
        setMentors(res.data.mentors);
        setDisplay(res.data.mentors);
      }
    } catch (error) {
      console.error("Error fetching mentors:", error);
    } finally {
      setLoading(false);
    }
  };


  useEffect(() => {
    fetchMentors();
  }, []);

  const override = css`
  display: block;
  margin: 0 auto;
`;

  
  return (
    <div className={findMentorCss.topLevelWrapper}>
    <div className={findMentorCss.buttonWrapper}>
      <Select
        ref={selectInputRefArea}
        onChange={(a) => onAreaChange(a)}
        options={areaOptions}
        styles={{ width: "100px" }}
        placeholder="Area Of Specialization"
      />
      <Select
        ref={selectInputRefIndustry}
        onChange={(i) => onIndstryChange(i)}
        options={industryOptions}
        styles={{ width: "100px", margin: "10px" }}
        placeholder="Industry Of Specialization"
      />
      <button
        style={{ /* Button styles */ }}
        onClick={clearFilter}
      >
        Clear filter
      </button>
      <button className={findMentorCss.helpButton} onClick={onClickHandler}>
        Help me find a Mentor
      </button>
    </div>

    <div >

    <div style={{display:'flex',alignItems:'center',justifyContent:'center'}}>
    <DotLoader
      color={"#123abc"}
      loading={loading}
      size={100}
      css={`
        transform: translate(-50%, -50%);
        animation-duration: 2s;
      `}
    />
    </div>
      {!loading &&
        display
          .filter((mentor) => mentor.status === "approved")
          .map((mentor) => (
            <LazyLoad key={mentor._id} height={200} offset={100}>
              <ProfileCard
                image={mentor.image}
                name={`${mentor.firstName} ${mentor.lastName}`}
                intro={mentor.biodata}
                experience={`${mentor.experience} years`}
                id={mentor._id}
                industry={mentor.industry}
                area={mentor.area}
              />
            </LazyLoad>
          ))}
    </div>
  </div>
  );
};

export default FindMentor;
