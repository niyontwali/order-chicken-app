import { Routes, Route } from "react-router-dom";
import { Container } from "react-bootstrap";
import About from "./pages/About";
import Home from "./pages/Home";
import Navbar from "./components/Navbar";
import { CartProvider } from "./context/CartContext";
import Footer from "./pages/Footer";

function App() {
  return (
    <CartProvider>
      <Navbar />
      <Container className="mb-4">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
        </Routes>
      </Container>
      <Footer />
    </CartProvider>
  );
}

export default App;
