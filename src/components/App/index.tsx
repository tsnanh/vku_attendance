import React from "react";
import "./App.css";
import Home from "../Home";
import { createMuiTheme, ThemeProvider } from "@material-ui/core";

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
      <ThemeProvider theme={appTheme}>
        <Home title="VKU Attendance" />
      </ThemeProvider>
    </div>
  );
}

export default App;
