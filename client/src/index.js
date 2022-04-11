import React from "react";
import ReactDOM from "react-dom";
import App from "./components/App";
import { SliderProvider } from "./components/SliderContext";
import { UserProvider } from "./components/UserContext";

ReactDOM.render(
  <React.StrictMode>
    <SliderProvider>
      <UserProvider>
        <App />
      </UserProvider>
    </SliderProvider>{" "}
  </React.StrictMode>,
  document.getElementById("root")
);
