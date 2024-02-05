import React from "react";
import { useLocation } from "react-router-dom";
const Profile = () => {
    const location = useLocation();
    const name = location.state ? location.state.name : null;
  
  return( <div>
  This is Profile of {name}


  </div>);
};
    
export default Profile;
