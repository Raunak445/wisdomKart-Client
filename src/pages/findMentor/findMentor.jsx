import React from "react";
import ProfileCard from "../../components/profileCard";
import profile1 from "./PRRameshProfile.png";
import findMentorCss from "./findMentor.module.css";
import FilterDropDown from "../../components/filterDropDown";
import {useNavigate} from 'react-router-dom'


const FindMentor = () => {


  const areaOptions = [
    "Leadtime/TAT reduction",
    " Inventory Management ",
    " Quality Improvement",
    " Productivity Improvement",
    " Cost Reduction",
    "Work Culture Improvement",
    " Employee Engagement",
    " People development",
    " Delivery Management",
    "Asset/Equipment Management",
    "Machine Breakdown reduction",
    "  Safety, Health & Environment",
    " Professional /Career Growth",
    "Visual Management",
    "Process Management",
    "Goal setting",
    "  Business Strategies",
    " Value Stream Management",
    "Startup Coaching",
    " Business Turnaround",
    " Business Plan",
    " Mid Career Growth",
  ];

  const industryOptions = [
    " Aerospace/Defence",
    " Automotive",
    "Food",
    "Pharma",
    "Retail",
    "Education",
    "Healthcare",
    " Restaurants/Hotels/Hospitality",
    " Healthcare/Hospitals",
    " Supply Chain & Logistics",
    "Real estate/Construction",
    "Heavy Machineries",
    "Foundry",
    "Forging",
    "Banking & Finance",
    "Agriculture",
    " IT/ITES/Software",
    "Service Industry",
    "General Engineering",
    "NGO",
    "Government",
    "Packaging",
    "Apparel/Garment Manufacturing",
    "Textile",
    "Chemical Manufacturing",
    "Energy/Power",
  ];

  const navigate=useNavigate()



  const onClickHandler=()=>{

    navigate('/help')

  }




  return (
    <div className={findMentorCss.topLevelWrapper}>




      <div className={findMentorCss.buttonWrapper}>
        <FilterDropDown name="Area" options={areaOptions} />
        <FilterDropDown name="Industry" options={industryOptions} />

        <button className={findMentorCss.helpButton} onClick={onClickHandler}>Help me find a Mentor</button>
      </div>



      <ProfileCard
        image={profile1}
        name="PR Ramesh"
        designation="VP & Principal Consultant - Seven Steps Business Transformation Systems"
        intro="Mr. P R Ramesh- A Seasoned Consultant and Engineer with MBA in operation management- has							
        25+ years of experience working in Multinational  organizations heading							
        Operations, Quality and Business Excellence	"
        achievement="Consulting for 100 + companies"
        experience="5000 + Hrs Mentoring"
      />




    </div>
  );
};



export default FindMentor;
