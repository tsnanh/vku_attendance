import { combineReducers } from "@reduxjs/toolkit";
import homeReducer from "./reducers/Home/home";

export default combineReducers({
    "home": homeReducer
});