import React from "react";
import { Nav, Navbar } from "react-bootstrap";

// import "bootstrap/dist/css/bootstrap.min.css";

export default Navbarsmob;
function Navbarsmob() {
  return (
    <Navbar collapseOnSelect expand="lg" className=" nav fixed-top">
      <Navbar.Brand href="#home">
        <img
          src="/static/images/logo_1.png"
          className="logo responsive"
          alt=""
        />
      </Navbar.Brand>
      <Navbar.Toggle
        className="humburger-menu"
        aria-controls="responsive-navbar-nav"
        style={{ backgroundColor: "white", color: "teal" }}
      />
      <Navbar.Collapse id="responsive-navbar-nav">
        <Nav className=" nav-mob mr-auto ">
          <Nav.Link
            className="nav-link"
            href="#features"
            style={{
              color: "white",
              fontFamily: "Source Sans Pro",
              fontSize: 22,
            }}
          >
            <b>Home</b>
          </Nav.Link>
          <Nav.Link
            className="nav-link"
            href="#pricing"
            style={{
              color: "white",
              fontFamily: "Source Sans Pro",
              fontSize: 22,
            }}
          >
            <b>About</b>
          </Nav.Link>
          {/* <NavDropdown title="Dropdown" id="collasible-nav-dropdown">
            <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
            <NavDropdown.Item href="#action/3.2">
              Another action
            </NavDropdown.Item>
            <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
            <NavDropdown.Divider />
            <NavDropdown.Item href="#action/3.4">
              Separated link
            </NavDropdown.Item>
          </NavDropdown> */}
        </Nav>
        <Nav>
          <Nav.Link
            className="nav-link"
            href="#deets"
            style={{
              color: "white",
              fontFamily: "Source Sans Pro",
              fontSize: 22,
            }}
          >
            <b>Solutions</b>
          </Nav.Link>
          <Nav.Link
            className="nav-link"
            eventKey={2}
            href="#memes"
            style={{
              color: "white",
              fontFamily: "Source Sans Pro",
              fontSize: 22,
            }}
          >
            <b>Contact</b>
          </Nav.Link>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  );
}
