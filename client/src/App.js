import React, { useEffect, useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import "./App.css";
import AppNavbar from "./components/AppNavbar";
import HomePage from "./pages/HomePage";
import LoginPage from "./pages/LoginPage";
import SignupPage from "./pages/SignupPage";
import { UserProvider } from "./context/UserContext";

function App() {
  const [user, setUser] = useState(null);

  useEffect(() => {
    const loggedInUser = JSON.parse(localStorage.getItem("user"));
    if (loggedInUser) {
      setUser(loggedInUser);
    } else {
      setUser(null);
    }
  }, [user]);

  return (
    <div className="App">
      <UserProvider value={{ user, setUser }}>
        <Router>
          <AppNavbar />
          <Routes>
            <Route path="/" exact element={<HomePage />} />
            <Route path="/signup" exact element={<SignupPage />} />
            <Route path="/login" exact element={<LoginPage />} />
          </Routes>
        </Router>
      </UserProvider>
    </div>
  );
}

export default App;
