import { configureStore } from "@reduxjs/toolkit";
import detailReducer from "./slices/detailSlice";
export const store = configureStore({
    reducer:{
        detailReducer
    }
})