import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom"; // Import useNavigate
import { adminMenu, userMenu } from "./SidebarData";
import "./navbar.css";
import {
  FaBell,
  FaUser,
  FaPlayCircle,
  FaBroadcastTower,
  FaSignOutAlt,
  FaBars,
  FaCalendarAlt,
} from "react-icons/fa";
import { IconContext } from "react-icons";

import { useEffect } from "react";
import axios from "axios";
import { useSelector, useDispatch } from "react-redux"; // Import useDispatch
import { setUser } from "../redux/features/userSlice";
import { MdDashboard } from "react-icons/md";
import { RiCalendar2Fill } from "react-icons/ri";
import { AiOutlineMail, AiFillHome, AiOutlineClose } from "react-icons/ai";

function Navbar() {
  const [sidebar, setSidebar] = useState(false);
  const dispatch = useDispatch(); // Initialize useDispatch
  const navigate = useNavigate(); // Initialize useNavigate
  const { user } = useSelector((state) => state.user);

  const mentorMenu = [
    {
      title: "Home",
      path: "/",
      icons: <AiFillHome />,
      cName: "nav-text",
    },
    {
      title: "Book an Appointment",
      path: "/bookMentor",
      icons: <RiCalendar2Fill />,
      cName: "nav-text",
    },
    {
      title: "Appointments",
      path: "/mentorAppointments ",
      icons: <FaCalendarAlt />,
      cName: "nav-text",
    },
    {
      title: "Profile",
      path: `/mentor/profile/${user?._id}`,
      icons: <FaUser />,
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
      icons: <FaPlayCircle />,
      cName: "nav-text",
    },

    {
      title: "LiveSesions",
      path: "/liveSessions",
      icons: <FaBroadcastTower />,
      cName: "nav-text",
    },
    {
      title: "Contact Us",
      path: "/contactUs",
      icons: <AiOutlineMail />,
      cName: "nav-text",
    },
    {
      title: "Log out",
      path: "/logout",
      icons: <FaSignOutAlt />,
      cName: "nav-text",
    },
  ];

  console.log(`User is mentor ${user?.isMentor}`);

  const SidebarData = user?.isAdmin
    ? adminMenu
    : user?.isMentor
    ? mentorMenu
    : userMenu;

  const showSidebar = () => setSidebar(!sidebar);

  const getUserData = async () => {
    try {
      const res = await axios
        .post(
          "http://localhost:8080/api/v1/user/getUserData",
          {},
          {
            headers: {
              Authorization: `Bearer ${localStorage.getItem('token')}`,
            },
          }
        )
        .then((res) => {
          const userData = res.data.data;
          console.log(userData);

          dispatch(setUser(userData));
        })
        .catch(() => {
          localStorage.clear();
          navigate("/signUp"); // Use navigate to redirect
        });
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getUserData();
  }, [location]); // Include navigate in the dependencies array
  // This is very important if you dont the you will have the bug of using window object to refresh the page again to execute the getUserData

  return (
    <>
      <IconContext.Provider value={{ color: "#fff" }}>
        <div className="navbar">
          <Link to="#" className="menu-bars">
            <FaBars onClick={showSidebar} />
          </Link>

          {user && (
            <div className="profile-user">
              <div
                className="bell-notification"
                count={user === null ? 0 : user?.notification.length}
                onClick={() => {
                  navigate("/notification");
                }}
                style={{ cursor: "pointer" }}
              >
                <FaBell size={25} className="bell" />
              </div>

              <Link
                to={`/profile/:${user.firstName + " " + user.lastName}`}
                className="style-user"
              >
                {user.firstName + " " + user.lastName}
              </Link>
            </div>
          )}
        </div>
        <nav className={sidebar ? "nav-menu active" : "nav-menu"}>
          <ul className="nav-menu-items" onClick={showSidebar}>
            <li className="navbar-toggle">
              <Link to="#" className="menu-bars">
                <AiOutlineClose />
              </Link>
            </li>
            {SidebarData.map((item, index) => {
              return (
                <li key={index} className={item.cName}>
                  <Link to={item.path}>
                    {item.icons}
                    <span>{item.title}</span>
                  </Link>
                </li>
              );
            })}
          </ul>
        </nav>
      </IconContext.Provider>
    </>
  );
}

export default Navbar;
