import React from 'react';
import { Link } from 'react-router-dom';
import { Facebook, Instagram, Twitter, MapPin, Phone, Mail } from 'lucide-react';
import './Footer.css';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="container footer-container">
        <div className="footer-section">
          <div className="footer-logo">
            <img src="/logo.jpg" alt="Ishti" className="logo-img" style={{maxHeight: '40px'}} />
          </div>
          <p>Your one-stop destination for the latest fashion trends. Shop the best quality clothes and accessories.</p>
          <div className="social-icons">
            <a href="#"><Facebook size={20} /></a>
            <a href="#"><Instagram size={20} /></a>
            <a href="#"><Twitter size={20} /></a>
          </div>
        </div>

        <div className="footer-section">
          <h4>Quick Links</h4>
          <ul>
            <li><Link to="/">Home</Link></li>
            <li><Link to="/shop">Shop</Link></li>
            <li><Link to="/about">About Us</Link></li>
            <li><Link to="/contact">Contact</Link></li>
          </ul>
        </div>

        <div className="footer-section">
          <h4>Customer Care</h4>
          <ul>
            <li><Link to="/faq">FAQ</Link></li>
            <li><Link to="/shipping">Shipping Policy</Link></li>
            <li><Link to="/returns">Returns & Exchanges</Link></li>
            <li><Link to="/terms">Terms of Service</Link></li>
          </ul>
        </div>

        <div className="footer-section">
          <h4>Contact Us</h4>
          <ul className="contact-info">
            <li><MapPin size={16} /> 123 Fashion Street, Mumbai</li>
            <li><Phone size={16} /> +91 98765 43210</li>
            <li><Mail size={16} /> support@ishti.com</li>
          </ul>
        </div>
      </div>
      <div className="footer-bottom">
        <p>&copy; 2025 Ishti. All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
