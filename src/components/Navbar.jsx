import React from "react";
import Container from "react-bootstrap/Container";
import Navbar from "react-bootstrap/Navbar";
import { useLocation } from "react-router-dom";
import "./navbar.css";

const Navbars = () => {
  const location = useLocation();

  const getPageName = () => {
    switch (location.pathname) {
      case "/":
        return "Home";
      case "/watchlist":
        return "Watchlist";
      default:
        return "Page Not Found";
    }
  };

  return (
    <Navbar expand="lg" className="navbar bg-body-tertiary">
      <Container>
        <Navbar.Brand style={{ color: "white" }}>{getPageName()}</Navbar.Brand>
      </Container>
    </Navbar>
  );
};

export default Navbars;
