import { MdDashboard } from "react-icons/md";
import {
  FaUser,
  FaChalkboardTeacher,
  FaSignInAlt,
  FaCalendarAlt,
  FaSignOutAlt,

  FaBroadcastTower,
  FaUserGraduate,
  FaPlayCircle,
  FaSearch,
} from "react-icons/fa";
import { GiTeacher } from "react-icons/gi";

import { RiCalendar2Fill } from "react-icons/ri";
import { AiOutlineMail, AiFillHome } from "react-icons/ai";

export const userMenuLogin = [
  {
    title: "Home",
    path: "/",
    icons: <AiFillHome color="black" />,
    cName: "nav-text",
  },
  {
    title: "Find a Mentor",
    path: "/findMentor",
    icons: <FaSearch color="black" />,
    cName: "nav-text",
  },
  {
    title: "Book an Appointment",
    path: "/bookMentor",
    icons: <RiCalendar2Fill color="black" />,
    cName: "nav-text",
  },
  {
    title: "Login/SignUp",
    path: "/login",
    icons: <FaSignInAlt color="black" />,
    cName: "nav-text",
  },

  {
    title: "Dashboard",
    path: "/dashboard",
    icons: <MdDashboard color="black" />,
    cName: "nav-text",
  },
  {
    title: "Courses",
    path: "https://courses.wisdomkart.com",
    icons: <FaPlayCircle color="black" />,
    cName: "nav-text",
  },

  // {
  //   title: "LiveSesions",
  //   path: "/liveSessions",
  //   icons: <FaBroadcastTower color="black" />,
  //   cName: "nav-text",
  // },
  {
    title: "Register as Mentor",
    path: "/applyMentor",
    icons: <FaUserGraduate color="black" />,
    cName: "nav-text",
  },

 
  {
    title: "Contact Us",
    path: "/contactUs",
    icons: <AiOutlineMail color="black" />,
    cName: "nav-text",
  },
];

export const userMenuLogout = [
  {
    title: "Home",
    path: "/",
    icons: <AiFillHome color="black" />,
    cName: "nav-text",
  },
  {
    title: "Find a Mentor",
    path: "/findMentor",
    icons: <FaSearch color="black" />,
    cName: "nav-text",
  },
  {
    title: "Book an Appointment",
    path: "/bookMentor",
    icons: <RiCalendar2Fill color="black" />,
    cName: "nav-text",
  },

  {
    title: "Dashboard",
    path: "/dashboard",
    icons: <MdDashboard color="black" />,
    cName: "nav-text",
  },
  {
    title: "Courses",
    path: "https://courses.wisdomkart.com",
    icons: <FaPlayCircle color="black" />,
    cName: "nav-text",
  },

  // {
  //   title: "LiveSesions",
  //   path: "/liveSessions",
  //   icons: <FaBroadcastTower color="black" />,
  //   cName: "nav-text",
  // },
  {
    title: "Register as Mentor",
    path: "/applyMentor",
    icons: <FaUserGraduate color="black" />,
    cName: "nav-text",
  },
  {
    title: "Contact Us",
    path: "/contactUs",
    icons: <AiOutlineMail color="black" />,
    cName: "nav-text",
  },
  {
    title: "Log out",
    path: "/logout",
    icons: <FaSignOutAlt color="black" />,
    cName: "nav-text",
  },
];

export const adminMenu = [
  {
    title: "Home",
    path: "/",
    icons: <AiFillHome color="black" />,
    cName: "nav-text",
  },
  {
    title: "Mentors",
    path: "/admin/mentors ",
    icons: <FaChalkboardTeacher color="black" />,
    cName: "nav-text",
  },
  // {
  //   title: "Users",
  //   path: "/admin/users ",
  //   icons: <FaUser color="black" />,
  //   cName: "nav-text",
  // },
  {
    title: "Find a Mentor",
    path: "/findMentor",
    icons: <FaSearch color="black" />,
    cName: "nav-text",
  },
  {
    title: "Appointments",
    path: "/admin/appointments ",
    icons: <FaCalendarAlt color="black" />,
    cName: "nav-text",
  },

  {
    title: "Dashboard",
    path: "/dashboard",
    icons: <MdDashboard color="black" />,
    cName: "nav-text",
  },
  {
    title: "Mentor Profiles",
    path: "/admin/mentorprofiles",
    icons: <GiTeacher color="black" />,
    cName: "nav-text",
  },
  {
    title: "Courses",
    path: "https://courses.wisdomkart.com",
    icons: <FaPlayCircle color="black" />,
    cName: "nav-text",
  },

  // {
  //   title: "LiveSesions",
  //   path: "/liveSessions",
  //   icons: <FaBroadcastTower color="black" />,
  //   cName: "nav-text",
  // },
  {
    title: "Log out",
    path: "/logout",
    icons: <FaSignOutAlt color="black" />,
    cName: "nav-text",
  },
];
