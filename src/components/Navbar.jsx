import { Button, Container, Nav, Navbar as BsNav } from "react-bootstrap";
import { NavLink } from "react-router-dom";
import { AiOutlineShoppingCart } from "react-icons/ai";
import { useCart } from "../context/CartContext";

const Navbar = () => {
  const { openCart, cartQuantity } = useCart();
  return (
    <BsNav className="nav-styles shadow-sm mb-3" sticky="top">
      <Container>
        <Nav className="me-auto gap-5">
          <Nav.Link className="text-white" to="/" as={NavLink}>
            Home
          </Nav.Link>
          <Nav.Link className="text-white" to="/about" as={NavLink}>
            About
          </Nav.Link>
        </Nav>
        {cartQuantity > 0 && (
        <Button className="btn-styles rounded-circle" variant="outline-info" onClick={openCart}>
          <AiOutlineShoppingCart size={40} color="white" />
          <div
            className="rounded-circle bg-danger d-flex justify-content-center align-items-center cart-style"
          >
            {cartQuantity}
          </div>
        </Button>
        )}
      </Container>
    </BsNav>
  );
};

export default Navbar;
