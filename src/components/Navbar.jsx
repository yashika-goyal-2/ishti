import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { ShoppingCart, Heart, User, Search, Menu, X } from 'lucide-react';
import { useCart } from '../context/CartContext';
import './Navbar.css';

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const { cartCount } = useCart();

  return (
    <nav className="navbar">
      <div className="container navbar-container">
        <Link to="/" className="logo">
          <img src="/icon.jpg" alt="Ishti" className="logo-img" />
        </Link>

        <div className={`nav-links ${isMenuOpen ? 'active' : ''}`}>
          <Link to="/" onClick={() => setIsMenuOpen(false)}>Home</Link>
          <Link to="/shop" onClick={() => setIsMenuOpen(false)}>Shop</Link>
          <Link to="/contact" onClick={() => setIsMenuOpen(false)}>Contact</Link>
        </div>

        <div className="search-bar">
          <input type="text" placeholder="Search for products..." />
          <button><Search size={20} /></button>
        </div>

        <div className="nav-icons">
          <Link to="/wishlist" className="icon-btn">
            <Heart size={24} />
            <span className="badge">0</span>
          </Link>
          <Link to="/cart" className="icon-btn">
            <ShoppingCart size={24} />
            <span className="badge">{cartCount}</span>
          </Link>
          <Link to="/login" className="icon-btn">
            <User size={24} />
          </Link>
          <button className="menu-btn" onClick={() => setIsMenuOpen(!isMenuOpen)}>
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
