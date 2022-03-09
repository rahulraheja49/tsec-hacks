import React, { useContext, useEffect } from "react";
import { Navbar, Container, Nav } from "react-bootstrap";
import { useNavigate, Link, useLocation } from "react-router-dom";
import toast, { Toaster } from "react-hot-toast";

import UserContext from "../context/UserContext";

export default function AppNavbar() {
  const { user, setUser } = useContext(UserContext);

  const history = useNavigate();
  const location = useLocation();

  useEffect(() => {
    const params = new URLSearchParams(location.search);
    const query = params.get("token");
    if (query) {
      localStorage.setItem("user", JSON.stringify(query));
      setUser(query);
      history("/");
      toast.success("Logged in successfully");
    }
  }, []);

  const signOut = () => {
    setUser(null);
    localStorage.removeItem("user");
    history("/");
  };

  return (
    <Navbar bg="dark" variant="dark" sticky="top">
      <Toaster position="top-right" />
      <Container>
        <Nav className="me-auto">
          <Link to="/" className="navbar-brand">
            TSEC HACKS
          </Link>
        </Nav>
        <Nav>
          {!user && (
            <Link className="nav-link" to="/signup">
              Sign Up
            </Link>
          )}
          {!user && (
            <Link className="nav-link" to="/login">
              Login
            </Link>
          )}
          {user && <Nav.Link onClick={signOut}>Sign Out</Nav.Link>}
        </Nav>
      </Container>
    </Navbar>
  );
}
