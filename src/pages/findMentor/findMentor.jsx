import ProfileCard from "../../components/profileCard";
// import profile1 from "./PRRameshProfile.png";
import findMentorCss from "./findMentor.module.css";
// import FilterDropDown from "../../components/filterDropDown";
import { useNavigate } from "react-router-dom";
import { useEffect, useRef, useState } from "react";
import axios from "axios";
import Select from "react-select";

const FindMentor = () => {
  const [mentors, setMentors] = useState([]);
  const [display, setDisplay] = useState([]);
  const [selectedOptionArea, setSelectedOptionArea] = useState(null);
  const [selectedOptionIndustry, setSelectedOptionIndustry] = useState(null);
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
    console.log("selected", selectedOptionIndustry);

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
    console.log("selected", selectedOptionArea);

    const filteredMentors = mentors.filter((mentor) => {
      console.log(mentor.area);
      return mentor.area.includes("Productivity Improvement");
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
    navigate("/help");
  };

  const fetchMentors = async () => {
    axios
      .get("http://localhost:8080/api/v1/mentor/getAllMentors")
      .then((res) => {
        if (res.data.success) {
          setMentors(res.data.mentors);
          setDisplay(res.data.mentors);
          console.log("mentors",mentors)
        }
      });
  };

  useEffect(() => {
    fetchMentors();
  }, []);

  return (
    <div className={findMentorCss.topLevelWrapper}>
      <div className={findMentorCss.buttonWrapper}>
        {/* <FilterDropDown name="Area" options={areaOptions} /> */}

        <Select
          // defaultValue={selectedOptionArea}
          ref={selectInputRefArea}
          onChange={(a) => onAreaChange(a)}
          options={areaOptions}
          styles={{ width: "100px" }}
          placeholder="Area Of Specialization"
        />

        {/* <FilterDropDown name="Industry" options={industryOptions} /> */}

        <Select
          // defaultValue={selectedOptionIndustry}
          ref={selectInputRefIndustry}
          onChange={(i) => onIndstryChange(i)}
          options={industryOptions}
          styles={{ width: "100px", margin: "10px" }}
          placeholder="Industry Of Specialization"
        />

        <button
          style={{
            padding: "5px",
            backgroundColor: "#007bff",
            color: "#fff",
            border: "none",
            cursor: "pointer",
            marginTop: "10px",
            borderRadius: "5px",
            fontSize: "16px",
            fontWeight: "bold",
            textTransform: "uppercase",
            boxShadow: "1px 1px 5px rgba(0, 0, 0, 0.2)",
            transition: "background-color 0.3s ease",
            margin: "10px",
          }}
          onClick={clearFilter}
        >
          Clear filter
        </button>

        <button className={findMentorCss.helpButton} onClick={onClickHandler}>
          Help me find a Mentor
        </button>
      </div>

      <div>
        {display.map((mentor) => (
          <ProfileCard
            key={mentor._id} // Ensure each component has a unique key
            image={mentor.image}
            name={`${mentor.firstName} ${mentor.lastName}`}
            intro={mentor.biodata}
            experience={`${mentor.experience} years`}
            id={mentor._id} // Pass mentor's ID as the id prop
            industry={mentor.industry}
            area={mentor.area}
          />
        ))}
      </div>

      {/* 
      <ProfileCard
        image={profile1}
        name="PR Ramesh"
        designation="VP & Principal Consultant - Seven Steps Business Transformation Systems"
        intro="Mr. P R Ramesh- A Seasoned Consultant and Engineer with MBA in operation management- has							
        25+ years of experience working in Multinational  organizations heading							
        Operations, Quality and Business Excellence	"
        achievement="Consulting for 100 + companies"
        experience="5000 + Hrs Mentoring"
        id={"6617b17399a4fad15e5d35bc"}
      /> */}
    </div>
  );
};

export default FindMentor;
