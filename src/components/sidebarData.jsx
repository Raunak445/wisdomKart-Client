import React from "react";
import * as FaIcons from "react-icons/fa";
import * as AiIcons from "react-icons/ai";
import * as IoIcons from "react-icons/io";
import { FcComments } from "react-icons/fc";
import { FcContacts } from "react-icons/fc";
import { FcVideoFile } from "react-icons/fc";
import { MdDashboard } from "react-icons/md";
import { FaUser,FaChalkboardTeacher ,FaSignInAlt,FaCalendarAlt,FaSignOutAlt,FaBroadcastTower,FaUserGraduate,FaPlayCircle  } from 'react-icons/fa';

export const userMenu = [
  {
    title: "Home",
    path: "/",
    icons: <AiIcons.AiFillHome />,
    cName: "nav-text",
  },
  {
    title: "Book an Appointment",
    path: "/bookMentor",
    icons: <FcComments />,
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
  },  {
    title: "Register as Mentor",
    path: "/applyMentor",
    icons: <FaUserGraduate />,
    cName: "nav-text",
  },
  {
    title: "Contact Us",
    path: "/contactUs",
    icons: <FcContacts />,
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
    icons: <AiIcons.AiFillHome />,
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
