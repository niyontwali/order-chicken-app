import { Button, Card } from "react-bootstrap";
import { useCart } from "../context/CartContext";
import { formatCurrency } from "../utils/formatCurrency";

const ChickenCard = ({ id, name, price, imgUrl }) => {
  const {
    getItemQuantity,
    increaseCartQuantity,
    decreaseCartQuantity,
    removeFromCart,
  } = useCart();
  const quantity = getItemQuantity(id);
  // console.log("****",quantity, "******")
  return (
    <>
      <Card className="card h-100">
        <Card.Img
          variant="top"
          src={imgUrl}
          height="200px"
          className="cardStyle"
        />
        <Card.Body className="d-flex flex-column">
          <Card.Title className="d-flex justify-content-between align-items-baseline mb-2">
            <span className="fs-2">{name}</span>
            <span className="ms-2 text-muted">{formatCurrency(price)}</span>
          </Card.Title>
          <div className="mt-2">
            {quantity === 0 ? (
              <Button size="sm" onClick={() => increaseCartQuantity(id)}>Add to Cart</Button>
            ) : (
              <div className="d-flex align-items-center flex-row justify-content-between">
                <div
                  className="d-flex align-items-center justify-content-center"
                  style={{ gap: 10 }}
                >
                  <Button size="sm" onClick={() => decreaseCartQuantity(id)}>-</Button>
                  <div className="fs-5">
                    <span>{quantity}</span>
                  </div>
                  <Button size="sm" onClick={() => increaseCartQuantity(id)}>+</Button>
                </div>
                <Button variant="danger" size="sm" onClick={() => removeFromCart(id)}>
                  Remove
                </Button>
              </div>
            )}
          </div>
        </Card.Body>
      </Card>
    </>
  );
};

export default ChickenCard;
