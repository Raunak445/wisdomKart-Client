import { Link, useNavigate } from "react-router-dom"; // Import useNavigate
import { adminMenu, userMenuLogin, userMenuLogout } from "./sidebarData";
import favicon from "./1.png";
import "./navbar.css";
import {
  FaBell,
  FaUser,
  FaPlayCircle,
  FaBroadcastTower,
  FaSignOutAlt,
  FaBars,
  FaCalendarAlt,
  FaSearch,
} from "react-icons/fa";
import { message } from "antd";
import { IconContext } from "react-icons";

import { useEffect, useState } from "react";
import axios from "axios";
import { useSelector, useDispatch } from "react-redux";
import { setUser } from "../redux/features/userSlice";
import { MdDashboard } from "react-icons/md";
import { RiCalendar2Fill } from "react-icons/ri";
import { AiOutlineMail, AiFillHome, AiOutlineClose } from "react-icons/ai";
import { useCookies } from "react-cookie";

function Navbar() {
  const [sidebar, setSidebar] = useState(false);
  const dispatch = useDispatch(); // Initialize useDispatch
  const navigate = useNavigate(); // Initialize useNavigate
  const { user } = useSelector((state) => state.user);
  const [cookies, setCookie, removeCookie] = useCookies(["token"]);

  const mentorMenu = [
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
      title: "Appointments",
      path: "/mentorAppointments ",
      icons: <FaCalendarAlt color="black"/>,
      cName: "nav-text",
    },
    {
      title: "Profile",
      path: `/mentor/profile/${user?._id}`,
      icons: <FaUser color="black" />,
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
      path: "/courses",
      icons: <FaPlayCircle  color="black"/>,
      cName: "nav-text",
    },

    {
      title: "LiveSesions",
      path: "/liveSessions",
      icons: <FaBroadcastTower color="black" />,
      cName: "nav-text",
    },
    {
      title: "Contact Us",
      path: "/contactUs",
      icons: <AiOutlineMail  color="black"/>,
      cName: "nav-text",
    },
    {
      title: "Log out",
      path: "/logout",
      icons: <FaSignOutAlt  color="black"/>,
      cName: "nav-text",
    },
  ];

  console.log(`User is mentor ${user?.isMentor}`);

  let SidebarData = [];

  if (user && user.isAdmin) {
    SidebarData = adminMenu;
  } else if (user && user.isMentor) {
    SidebarData = mentorMenu;
  } else if (user === undefined) {
    SidebarData = userMenuLogin;
  } else {
    SidebarData = userMenuLogout;
  }

  const showSidebar = () => setSidebar(!sidebar);

  const getUserData = async () => {
    try {
      await axios
        .post(
          "https://wisdomkart-server.onrender.com/api/v1/user/getUserData",
          {},
          {
            headers: {
              Authorization: `Bearer ${cookies.token}`,
            },
          }
        )
        .then((res) => {
          const userData = res.data.data;
          //console.log(userData);
          dispatch(setUser(userData));
        })
        .catch(() => {
          // removeCookie("token");
          message.error("Error in fetching data from server please wait")
          navigate("/"); // Use navigate to redirect
        });
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getUserData();
  }, [cookies]); // Include navigate in the dependencies array
  // This is very important if you dont the you will have the bug of using window object to refresh the page again to execute the getUserData

  const handleClick = () => {
    navigate("/");
  };

  return (
    <>
      {/* navbar color white and make logo redirect to home page */}

      <IconContext.Provider value={{ color: "white" }}>
        <div className="navbar">
          <img
            src={favicon}
            alt="Favicon"
            className="navbar-icon"
            onClick={handleClick}
          />
          <Link to="#" className="menu-bars">
            <FaBars
              onClick={showSidebar}
              color="black"
              size="2.5rem"
              style={{ marginLeft: "20px" }}
            />
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
                <FaBell size={25} className="bell" color="black" />
              </div>

              <div
                onClick={() =>
                  navigate(`/profile/:${user.firstName + " " + user.lastName}`)
                }
                className="style-user"
              >
                {user.firstName + " " + user.lastName}
              </div>
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
