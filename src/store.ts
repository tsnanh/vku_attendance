import { routerMiddleware } from "react-router-redux";
import createHistory from "history/createBrowserHistory";
import { applyMiddleware, createStore } from "@reduxjs/toolkit";
import { createLogger } from "redux-logger";

export const history = createHistory();
const myRouterMiddleware = routerMiddleware(history);

const getMiddleware = () => {
    if (process.env.NODE_ENV === 'production') {
        return applyMiddleware(myRouterMiddleware)
    } else {
        return applyMiddleware(myRouterMiddleware, createLogger())
    }
};

export const store = createStore(
    reducer
)