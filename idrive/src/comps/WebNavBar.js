import React from "react";
import "./styles.css";
import { HashLink as Link } from "react-router-hash-link";
import { FaPowerOff } from "react-icons/fa";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import { auth } from "../firebase/config";

function WebNavBar() {
  const handleLogout = () => {
    auth.signOut();
  };

  return (
    <Navbar
      collapseOnSelect
      expand="lg"
      bg="dark"
      variant="dark"
      className="navb"
    >
      <Container>
        <Navbar.Brand className=" ms-1 fs-1">IDrive</Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav justify-content-center" />
        <Navbar.Collapse id="responsive-navbar-nav" className="text-centre">
          <Nav
            className="ml-auto justify-content-end "
            style={{ width: "100%" }}
          >
            <Nav.Link as={Link} to={"/"} className="ms-5 me-2">
              Home
            </Nav.Link>
            <Nav.Link as={Link} to={"#section2"} className="ms-5 me-2">
              About
            </Nav.Link>
            <Nav.Link as={Link} to={"#section3"} className="ms-5 me-2">
              Contact Us
            </Nav.Link>
            <Nav.Link className="ms-5 me-2">
              <FaPowerOff onClick={handleLogout} />
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default WebNavBar;
