import React from "react";
import { Navbar, Nav, Button, Container } from "react-bootstrap";
import { Link } from "react-router-dom"; 
import { convertToCLPCurrency } from "../components/utils"; 

function NavbarApp() {
  const total = 25000;
  const token = true;

  return (
    <Navbar bg="dark" data-bs-theme="dark">
      <Container className="d-flex justify-content-between align-items-center">
        <Nav className="d-flex align-items-center gap-2">
          <Navbar.Brand as={Link} to="/">Pizzería Mamma Mia!</Navbar.Brand>
          <Button as={Link} className="btn-sm" variant="outline-light" to="/">
            🍕Home
          </Button>
          <Button as={Link} className="btn-sm" variant="outline-light" to="/register">
            🔐Register
          </Button>
          <Button as={Link} className="btn-sm" variant="outline-light" to="/login">
            🔐Login
          </Button>
          <Button as={Link} className="btn-sm" variant="outline-light" to="/cart">
            🛒Cart
          </Button>
          <Button as={Link} className="btn-sm" variant="outline-light" to="/profile">
            🔓Profile
          </Button>
          <Button as={Link} className="btn-sm" variant="outline-light" to="/404">
            ❌NotFound
          </Button>
          {token && (
            <>
              <Button
                as={Link}
                className="btn-sm"
                variant="outline-light"
                to="/logout"
              >
                🔒Logout
              </Button>
              <Button
                as={Link}
                className="btn-sm"
                variant="outline-info"
                to="/cart"
              >
                🛒Total: {convertToCLPCurrency(total)}
              </Button>
            </>
          )}
        </Nav>
      </Container>
    </Navbar>
  );
}

export default NavbarApp;