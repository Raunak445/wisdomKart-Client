import { configureStore } from "@reduxjs/toolkit";
import { alertSlice } from "./features/alert";
import { userSlice } from "./features/userSlice";

export default configureStore({
    reducer:{
        alerts:alertSlice.reducer,
        user:userSlice.reducer
    }
})