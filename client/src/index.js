import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import axios from "axios";
import { UserProvider } from "./context/userContext";
import { LoadingProvider } from "./context/LoadingProvider";
import { BrowserRouter } from "react-router-dom";
import App from "./App";

axios.defaults.baseURL = "http://localhost:5000";


ReactDOM.render(


  <BrowserRouter>
      <UserProvider>
        <LoadingProvider>
          <App />
        </LoadingProvider>
      </UserProvider>
  </BrowserRouter>,
  document.getElementById("root")
);
