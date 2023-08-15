import React from "react";
import { Button, Container, Nav, Navbar as NavbarBs } from "react-bootstrap";
import { NavLink } from "react-router-dom";
import { BiCartAlt } from "react-icons/bi";
import { useShoppingCart } from "../context/ShoppingCartContext";

const Navbar = () => {
  const { openCart, cartQuantity } = useShoppingCart();
  return (
    <NavbarBs sticky="top" className="bg-white shadow-sm mb-3">
      <Container>
        <Nav className="me-auto">
          <Nav.Link to="/" as={NavLink}>
            Home
          </Nav.Link>
          <Nav.Link to="/store" as={NavLink}>
            Store
          </Nav.Link>
          <Nav.Link to="/about" as={NavLink}>
            About
          </Nav.Link>
        </Nav>
        <Button
          variant="outline-primary"
          className="rounded-circle"
          style={{ width: "3rem", height: "3rem", position: "relative" }}
          onClick={() => openCart()}
        >
          <BiCartAlt />
          <div
            className="rounded-circle bg-danger d-flex justify-content-center align-items-centr"
            style={{
              position: "absolute",
              color: "white",
              width: "1.5rem",
              height: "1.5rem",
              bottom: 0,
              right: 0,
              transform: "translate(25%,25%)",
            }}
          >
            {cartQuantity}
          </div>
        </Button>
      </Container>
    </NavbarBs>
  );
};

export default Navbar;
