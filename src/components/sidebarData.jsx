import React from "react";


import { MdDashboard } from "react-icons/md";
import { FaUser,FaChalkboardTeacher ,FaSignInAlt,FaCalendarAlt,FaSignOutAlt,FaBroadcastTower,FaUserGraduate,FaPlayCircle  } from 'react-icons/fa';

import { RiCalendar2Fill } from 'react-icons/ri'
import { AiOutlineMail,AiFillHome } from 'react-icons/ai';

export const userMenu = [
  {
    title: "Home",
    path: "/",
    icons: <AiFillHome />,
    cName: "nav-text",
  },
  {
    title: "Book an Appointment",
    path: "/bookMentor",
    icons: <RiCalendar2Fill/>,
    cName: "nav-text",
  },
  {
    title: "Login/SignUp",
    path: "/login",
    icons: <FaSignInAlt />,
    cName: "nav-text",
  },
  {
    title: "Dashboard",
    path: "/dashboard",
    icons: <MdDashboard />,
    cName: "nav-text",
  },
  {
    title: "Courses",
    path: "/courses",
    icons: <FaPlayCircle  />,
    cName: "nav-text",
  },

  {
    title: "LiveSesions",
    path: "/liveSessions",
    icons: <FaBroadcastTower />,
    cName: "nav-text",
  }, 
   {
    title: "Register as Mentor",
    path: "/applyMentor",
    icons: <FaUserGraduate />,
    cName: "nav-text",
  },
  {
    title: "Contact Us",
    path: "/contactUs",
    icons: <AiOutlineMail />,
    cName: "nav-text",
  },{
    title: "Log out",
    path: "/logout",
    icons: <FaSignOutAlt/>,
    cName: "nav-text",
  },
];


export const adminMenu = [
  {
    title: "Home",
    path: "/",
    icons: <AiFillHome />,
    cName: "nav-text",
  },
  {
    title: "Mentors",
    path: "/admin/mentors ",
    icons: <FaChalkboardTeacher/>,
    cName: "nav-text",
  }, {
    title: "Users",
    path: "/admin/users ",
    icons: <FaUser />,
    cName: "nav-text",
  },
  {
    title: "Appointments",
    path: "/appointments ",
    icons: <FaCalendarAlt />,
    cName: "nav-text",
  },
  
  {
    title: "Dashboard",
    path: "/dashboard",
    icons: <MdDashboard />,
    cName: "nav-text",
  },
  {
    title: "Courses",
    path: "/courses",
    icons: <FaPlayCircle  />,
    cName: "nav-text",
  },

  {
    title: "LiveSesions",
    path: "/liveSessions",
    icons: <FaBroadcastTower />,
    cName: "nav-text",
  },
  {
    title: "Log out",
    path: "/logout",
    icons: <FaSignOutAlt/>,
    cName: "nav-text",
  },
  
];
