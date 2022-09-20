import React from 'react'
import { Navbar, Container, Nav, NavDropdown } from 'react-bootstrap'
import CartWidget from './../CartWidget/CartWidget'
import {Link} from 'react-router-dom'

const NavBar = () => {
  return (
    <header>
      <Navbar bg="dark" variant="dark" expand="lg">
        <Container>
          <Navbar.Brand as={Link} to="/">Kubapic</Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="me-auto">
             <Nav.Link as={Link} to="/">Home</Nav.Link> 
              <NavDropdown title="Prints" id="basic-nav-dropdown">
                <NavDropdown.Item as={Link} to="category/Bariloche">Bariloche</NavDropdown.Item>
                <NavDropdown.Item as={Link} to="category/Chalten">El Chalten</NavDropdown.Item>
                <NavDropdown.Item as={Link} to="category/Calafate">Calafate</NavDropdown.Item>
                <NavDropdown.Item as={Link} to="category/VLA">Villa La Angostura</NavDropdown.Item>
              </NavDropdown>
            </Nav>
          </Navbar.Collapse>
          <CartWidget/>
        </Container>
      </Navbar>
    </header>
  )
}

export default NavBar