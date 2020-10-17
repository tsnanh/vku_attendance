import React from "react";
import "./App.css";
import Home from "../Home";
import { createMuiTheme, ThemeProvider } from "@material-ui/core";
import { Provider } from "react-redux";
import { store } from "../../store";

const appTheme = createMuiTheme({
	palette: {
		primary: {
			main: "#d32f2f",
		},
	},
});

function App() {
	return (
		<div>
			<Provider store={store}>
				<ThemeProvider theme={appTheme}>
					<Home title="VKU Attendance" />
				</ThemeProvider>
			</Provider>
		</div>
	);
}

export default App;
