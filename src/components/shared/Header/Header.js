import React from "react";
import { Container, Navbar, Nav, Button } from "react-bootstrap";
import { Link } from "react-router-dom";
import logo from "../../../images/logo.png";
import useFirebase from "../../../hook/useFirebase";
const Header = () => {
  const { user, logout } = useFirebase();
  return (
    <>
      <Navbar bg="light" expand="lg">
        <Container>
          <Navbar.Brand href="#home">
            <img
              src={logo}
              width="40"
              height="40"
              className="d-inline-block align-top me-2 rounded-circle"
              alt="React Bootstrap logo"
            />
            Physio Care
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="ms-auto">
              <Nav.Link as={Link} to="/home">
                Home
              </Nav.Link>
              <Nav.Link as={Link} to="/about">
                About Us
              </Nav.Link>

              <Nav.Link as={Link} to="/volunteer">
                Be a Volunteer
              </Nav.Link>
              {user?.email && (
                <span className="mx-2 text-uppercase text-primary mt-2">
                  {user.displayName}
                </span>
              )}
              {!user.email && (
                <Nav.Link as={Link} to="/login">
                  Log In
                </Nav.Link>
              )}

              {user?.email && <Button onClick={logout}>Logout</Button>}
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </>
  );
};

export default Header;
