import { configureStore } from "@reduxjs/toolkit";
import PostReducer from "./redux/postSlice";

export const store = configureStore({
    reducer:{
        post : PostReducer,
        user: PostReducer,
        count: PostReducer
    }
})