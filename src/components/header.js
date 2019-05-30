import React from "react"

import { Navbar, NavDropdown, Nav, Container } from "react-bootstrap"
import LOGO from "../images/geoex.png"
class Header extends React.Component {
  render() {
    return (
      <header>
        <Container fluid>
          <Navbar bg="white" expand="lg" fixed="top">
            <Navbar.Brand href="#home">
              <img style={{ width: "30%" }} src={LOGO} alt="" />
            </Navbar.Brand>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
              <Nav className="justify-content-end">
                <Nav.Link href="#home">Home</Nav.Link>
                <Nav.Link href="#link">About</Nav.Link>
                <NavDropdown title="Services" id="basic-nav-dropdown">
                  <NavDropdown.Item href="#action/3.1">
                    Services
                  </NavDropdown.Item>
                  <NavDropdown.Item href="#action/3.2">
                    Another action
                  </NavDropdown.Item>
                  <NavDropdown.Item href="#action/3.3">
                    Something
                  </NavDropdown.Item>
                  <NavDropdown.Divider />
                  <NavDropdown.Item href="#action/3.4">
                    Separated link
                  </NavDropdown.Item>
                </NavDropdown>
                <Nav.Link href="#link">Quotations</Nav.Link>

                <Nav.Link href="#link">Contact</Nav.Link>
              </Nav>
            </Navbar.Collapse>
          </Navbar>
        </Container>
      </header>
    )
  }
}

export default Header
