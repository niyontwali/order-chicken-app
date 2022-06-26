import { Col, Row } from "react-bootstrap";
import ChickenCard from "../components/ChickenCard";
import { db } from "../data/items";

const Home = () => {
  return (
    <div>
      <h1>Chicken Variaties</h1>
      <Row md={2} xs={1} lg={3} className="g-3">
        {db.map((item) => (
          <Col key={item.id}>
            <ChickenCard {...item} />
          </Col>
        ))}
      </Row>
    </div> 
  );
};

export default Home;
