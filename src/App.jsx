import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Home from './pages/Home';
import Shop from './pages/Shop';
import ProductDetails from './pages/ProductDetails';
import Cart from './pages/Cart';
import Checkout from './pages/Checkout';
import Contact from './pages/Contact';
import FAQ from './pages/FAQ';
import ShippingPolicy from './pages/ShippingPolicy';
import Returns from './pages/Returns';
import Terms from './pages/Terms';
import Cursor from './components/Cursor';
import { CartProvider } from './context/CartContext';

function App() {
  return (
    <CartProvider>
      <Router>
        <div className="app">
          <Cursor />
          <Navbar />
          <main className="main-content">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/shop" element={<Shop />} />
            <Route path="/product/:id" element={<ProductDetails />} />
            <Route path="/cart" element={<Cart />} />
            <Route path="/checkout" element={<Checkout />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/faq" element={<FAQ />} />
            <Route path="/shipping" element={<ShippingPolicy />} />
            <Route path="/returns" element={<Returns />} />
            <Route path="/terms" element={<Terms />} />
          </Routes>
        </main>
        <Footer />
        </div>
      </Router>
    </CartProvider>
  );
}

export default App;
