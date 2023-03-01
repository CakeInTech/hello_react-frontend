import { configureStore } from "@reduxjs/toolkit";
import { thunkMiddleware } from "redux-thunk";
import greetingReducer from "./greetingReducer";

const store = configureStore({
    reducer: greetingReducer,
    middleware: [thunkMiddleware]
})

export default store;