import React, { useEffect, useState, useContext } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { UserContext } from "./context/userContext";
import "./App.css";
import AppNavbar from "./components/AppNavbar";
import HomePage from "./pages/HomePage";
import LoginPage from "./pages/LoginPage";
import SignupPage from "./pages/SignupPage";

function App() {
  const {user, setUser} = useContext(UserContext);

  // useEffect(() => {
  //   const loggedInUser = JSON.parse(localStorage.getItem("user"));
  //   if (loggedInUser) {
  //     setUser(loggedInUser);
  //   } else {
  //     setUser(null);
  //   }
  // }, [user]);

  return (
    <div className="App">

        {/* <Router> */}
          <AppNavbar />
          <Routes>
            <Route path="/" exact element={<HomePage />} />
            <Route path="/signup" exact element={<SignupPage />} />
            <Route path="/login" exact element={<LoginPage />} />
          </Routes>
        {/* </Router> */}


    </div>
  );
}

export default App;
