import React from 'react';
import { Navbar, Nav, Container } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';

function Navigation() {
  return (
    <Navbar bg="success" variant="dark" expand="lg" sticky="top">
      <Container>
        <Navbar.Brand as={Link} to="/" className="d-flex align-items-center">
          <img
            src="/ecochatarra-logo.png"
            height="40"
            className="d-inline-block align-top me-2"
            alt="Logo Ecochatarra"
          />
          <strong className="text-white fs-5">ECOCHATARRA</strong>
        </Navbar.Brand>

        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ms-auto">
            <Nav.Link as={Link} to="/">Inicio</Nav.Link>
            <Nav.Link as={Link} to="/materiales">Materiales</Nav.Link> 
            <Nav.Link as={Link} to="/misionvision">Precio metales</Nav.Link>
            <Nav.Link as={Link} to="/objetivos">Calculadora </Nav.Link>
            <Nav.Link as={Link} to="/innovacion">Innovación</Nav.Link>
            <Nav.Link as={Link} to="/importancia">Importancia</Nav.Link>
            <Nav.Link as={Link} to="/equipos">Equipos</Nav.Link>
            <Nav.Link as={Link} to="/contacto">Contacto</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default Navigation;
