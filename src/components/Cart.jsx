import { Button, Offcanvas, Stack } from "react-bootstrap";
import { useCart } from "../context/CartContext";
import { db } from "../data/items";
import { formatCurrency } from "../utils/formatCurrency";
import CartItem from "./CartItem";

const Cart = ({ isOpen }) => {
  const { closeCart, cartItems } = useCart();
  return (
    <Offcanvas show={isOpen} onHide={closeCart} placement="end">
      <Offcanvas.Header closeButton>
        <Offcanvas.Title className="fw-bold">Cart</Offcanvas.Title>
      </Offcanvas.Header>
      <Offcanvas.Body>
        <Stack gap={3}>
          {cartItems.map((item) => (
            <CartItem key={item.id} {...item} />
          ))}
          {cartItems.length !== 0 ? (
            <div className="ms-auto fs-bold fs-5">
              Total{" "}
              {formatCurrency(
                cartItems.reduce((total, cartItem) => {
                  const item = db.find((i) => i.id === cartItem.id);
                  return total + (item?.price || 0) * cartItem.quantity;
                }, 0)
              )}
            </div>
          ) : (
            <div className="mt-4 text-center fw-bold">
              There are no items in the your cart
            </div>
          )}
          {cartItems.length !== 0 ? (
            <div className="mt-4 mx-auto">
              <Button className="btn btn-md fs-5" style={{ width: "20vw" }}>
                Order
              </Button>
            </div>
          ) : null}
        </Stack>
      </Offcanvas.Body>
    </Offcanvas>
  );
};

export default Cart;
