import { Button, Stack } from "react-bootstrap";
import { useCart } from "../context/CartContext";
import { db } from "../data/items";
import { formatCurrency } from "../utils/formatCurrency";

const CartItem = ({ id, quantity }) => {
  const { removeFromCart } = useCart();
  const item = db.find((i) => i.id === id);

  if (item === null) return null;
  return (
    <Stack direction="horizontal" gap={2} className="d-flex align-items-center">
      <img
        src={item.imgUrl}
        alt="items in cart"
        style={{ width: "110px", height: "80px", objectFit: "cover" }}
      />
      <div className="me-auto">
        <div>{item.name}</div>
        <div>
          {quantity > 1 && (
            <span
              className="text-success"
              style={{ fontSize: "0.75rem", fontWeight: "bold" }}
            >
              x{quantity}
            </span>
          )}
        </div>
        <div className="text-muted" style={{ fontSize: "0.75rem" }}>
          {formatCurrency(item.price)}
        </div>
      </div>
      <div style={{ fontSize: "1rem" }}>
        {formatCurrency(item.price * quantity)}
      </div>
      <Button
        variant="outline-danger"
        size="sm"
        onClick={() => removeFromCart(item.id)}
      >
        &times;
      </Button>
    </Stack>
  );
};

export default CartItem;
