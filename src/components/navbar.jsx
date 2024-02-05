import React, { useState } from "react";
import * as FaIcons from "react-icons/fa";
import * as AiIcons from "react-icons/ai";
import { Link, useNavigate } from "react-router-dom"; // Import useNavigate
import { adminMenu, userMenu } from "./SidebarData";
import "./navbar.css";
import { FaBell } from "react-icons/fa";
import { IconContext } from "react-icons";

import { useEffect } from "react";
import axios from "axios";
import { useSelector, useDispatch } from "react-redux"; // Import useDispatch
import { setUser } from "../redux/features/userSlice";

function Navbar() {
  const [sidebar, setSidebar] = useState(false);
  const dispatch = useDispatch(); // Initialize useDispatch
  const navigate = useNavigate(); // Initialize useNavigate
  const { user } = useSelector((state) => state.user);
  const SidebarData = user?.isAdmin ? adminMenu : userMenu;

  const showSidebar = () => setSidebar(!sidebar);

  const getUserData = async () => {
    try {
      const res = await axios
        .post(
          "http://localhost:8080/api/v1/user/getUserData",
          {},
          {
            headers: {
              Authorization: `Bearer ${localStorage.getItem("token")}`,
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
          navigate("/login"); // Use navigate to redirect
        });
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getUserData();
  }, [navigate]); // Include navigate in the dependencies array
  // This is very important if you dont the you will have the bug of using window object to refresh the page again to execute the getUserData

  return (
    <>
      <IconContext.Provider value={{ color: "#fff" }}>
        <div className="navbar">
          <Link to="#" className="menu-bars">
            <FaIcons.FaBars onClick={showSidebar} />
          </Link>

          {user && (
            <div className="profile-user">
              <div
                className="bell-notification"
                count={(user===null)?0:(user?.notification.length)}
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
                <AiIcons.AiOutlineClose />
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
