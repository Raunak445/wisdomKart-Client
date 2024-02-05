import React, { Children, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Navigate } from "react-router-dom";
import { hideLoading, showLoading } from "../redux/features/alert";
import axios from "axios";
import { setUser } from "../redux/features/userSlice";



export default function ProtectedRoutes({ children }) {
//       const dispatch = useDispatch();
//   const { user } = useSelector((state) => state.user);

//   const getUser = async () => {
//     try {
//       dispatch(showLoading());
//      const res=  axios.post(
//         "http://localhost:8080/api/v1/user/getUserData",
//         { token: localStorage.getItem("token") },
//         {
//           headers: {
//             Authorization: "Bearer " + localStorage.getItem("token"),
//           },
//         }
//       ).then((res)=>{
//         dispatch(hideLoading());
//         dispatch(setUser(res.data.data));
//       })

//       console.log(res)
     

//       if (!res.data.success) {
        
//         <Navigate to="/login" />;
//       } 

//     } catch (error) {
//       dispatch(hideLoading());
//       console.log(error);
//     }
//   };

//   useEffect(() => {
//     if (!user) {
//       getUser();
//     }
//   }, [user]);

  if (localStorage.getItem("token")) {
    return children;
  } else {
    return <Navigate to="/login" />;
  }
}
