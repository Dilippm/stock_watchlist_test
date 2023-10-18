import React from "react";
import Container from "react-bootstrap/Container";
import Navbar from "react-bootstrap/Navbar";
import { Link, useLocation } from "react-router-dom";
import "./navbar.css";

const Navbars = () => {
  const location = useLocation();

  const getLinkTo = () => {
    if (location.pathname === "/") {
      return "/watchlist";
    } else if (location.pathname === "/watchlist") {
      return "/";
    } else {
      return "/";
    }
  };

  const getLinkText = () => {
    if (location.pathname === "/") {
      return "Watchlist";
    } else if (location.pathname === "/watchlist") {
      return "Home";
    } else {
      return "Home";
    }
  };
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
      <Link to={getLinkTo()} className="link" style={{ color: "white", textDecoration:"none",paddingLeft:"50px"}}>
          {getLinkText()}
        </Link>
      </Container>
    </Navbar>
  );
};

export default Navbars;
