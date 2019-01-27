import React from 'react';
import {
  Navbar, Nav, NavDropdown, Button,
} from 'react-bootstrap';

export default function NavbarComponent(props) {
  return (
    <Navbar fixed="top" bg="light" expand="lg">
      <Navbar.Brand href="/">Hotels</Navbar.Brand>
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="mr-auto">
          <Button onClick={props.orderByRating} variant="outline-success">Order by Score</Button>
          <NavDropdown title="Brands" id="basic-nav-dropdown">
            <NavDropdown.Item onClick={props.orderByBrand.bind(this, 'gold')}>Gold</NavDropdown.Item>
            <NavDropdown.Item onClick={props.orderByBrand.bind(this, 'silver')}>Silver</NavDropdown.Item>
            <NavDropdown.Item onClick={props.orderByBrand.bind(this, 'blue')}>Blue</NavDropdown.Item>
            <NavDropdown.Item onClick={props.orderByBrand.bind(this, 'red')}>Red</NavDropdown.Item>
          </NavDropdown>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  );
}
