import React from 'react';
import { Link } from 'react-router-dom';
import { Container, Navbar } from 'react-bootstrap';

const Navigation = () => (
  <Navbar bg="dark" variant="dark">
    <Container>
      <Navbar.Brand href="#home">Math MAgitions Website</Navbar.Brand>
      <Navbar.Toggle />
      <Navbar.Collapse className="justify-content-end">
        <Link to="/" className="nav-link">
          Home
        </Link>
        <Link to="/calculator" className="nav-link">Calculator</Link>
        <Link to="quote" className="nav-link">Quote</Link>
      </Navbar.Collapse>
    </Container>
  </Navbar>
);

export default Navigation;
