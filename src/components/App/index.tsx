import React from "react";
import "./App.css";
import Home from "../Home";
import { ThemeProvider } from "@material-ui/core";
import { Provider } from "react-redux";
import { store } from "../../store";
import theme from "../../theme";
import { BrowserRouter as Router, Redirect } from "react-router-dom";

function App() {
  return (
    <div>
      <Provider store={store}>
        <ThemeProvider theme={theme}>
          <Router>
            <Home title=" Attendance" />
            <Redirect exact from="/" to="/teachers" />
          </Router>
        </ThemeProvider>
      </Provider>
    </div>
  );
}

export default App;
