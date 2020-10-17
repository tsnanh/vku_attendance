import createHistory from "history/createBrowserHistory";
import { applyMiddleware, createStore, compose } from "@reduxjs/toolkit";
import reducers from "./reducer";
import thunk from "redux-thunk";

export const history = createHistory();
const composeEnhancers =
	((window as { [key: string]: any })[
		"__REDUX_DEVTOOLS_EXTENSION_COMPOSE__"
	] as typeof compose) || compose;
export const store = createStore(reducers, applyMiddleware(thunk));
