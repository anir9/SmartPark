import React from "react";
import logo from "../assets/SmartParkLogo.png";
import { MemoryRouter } from "react-router-dom";
import Button from "react-bootstrap/Button";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";
import Nav from "react-bootstrap/Nav";
import { useAuth0 } from "../react-auth0-spa";
import ImageLoader from "react-load-image";
import Preloader from "react-load-image";
import NavItem from "react-bootstrap/NavItem";
import { Link } from "react-router-dom";
const NavBar = () => {
  const { isAuthenticated, loginWithRedirect, logout } = useAuth0();

  const logoutWithRedirect = () =>
    logout({
      returnTo: window.location.origin,
    });
  return (
    <MemoryRouter>
      <Navbar bg="dark" variant="dark" expand="lg">
        <Navbar.Brand href="/">
          <ImageLoader src={logo}>
            <img />
            <div>Error!</div>
            <Preloader />
          </ImageLoader>
        </Navbar.Brand>
        <Navbar.Brand href="/">SmartPark</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          {isAuthenticated && (
            <Nav className="mr-auto">
              <Nav.Link href="/Make">Make Reservation</Nav.Link>
              <Nav.Link href="/Edit">Edit Reservation</Nav.Link>
              <Nav.Link href="/Billing">Billing</Nav.Link>

              <NavDropdown title="Edit Account" id="basic-nav-dropdown">
                <NavDropdown.Item href="/Edit Account"></NavDropdown.Item>
                <NavDropdown.Item href="/AddVehicle">
                  Add Vehicle Information
                </NavDropdown.Item>
                <NavDropdown.Item href="/CreditCard">
                  Credit Card Information
                </NavDropdown.Item>
              </NavDropdown>

              <NavItem>
                <Button onClick={() => logoutWithRedirect()}>Logout</Button>
              </NavItem>
            </Nav>
          )}
          {!isAuthenticated && (
            <Nav className="ml-auto">
              <Nav.Link href="/">Home</Nav.Link>
              <NavItem>
                <Button onClick={() => loginWithRedirect({})}>Login</Button>
              </NavItem>
            </Nav>
          )}
        </Navbar.Collapse>
      </Navbar>
    </MemoryRouter>
  );
};
export default NavBar;
