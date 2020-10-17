import { combineReducers } from "@reduxjs/toolkit";
import homeReducer from "./reducers/Home";

export default combineReducers({
    "home": homeReducer
});