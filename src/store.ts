import { applyMiddleware, createStore } from "@reduxjs/toolkit";
import reducers from "./reducer";
import thunk from "redux-thunk";

export const store = createStore(reducers, applyMiddleware(thunk));
