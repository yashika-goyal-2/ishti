import React from 'react';
import { Link } from 'react-router-dom';
import { useCart } from '../context/CartContext';
import { Trash2, Minus, Plus, ArrowLeft } from 'lucide-react';
import './Cart.css';

const Cart = () => {
  const { cart, removeFromCart, updateQuantity, cartTotal } = useCart();

  if (cart.length === 0) {
    return (
      <div className="container empty-cart">
        <h2>Your Cart is Empty</h2>
        <p>Looks like you haven't added anything to your cart yet.</p>
        <Link to="/shop" className="btn btn-primary">Start Shopping</Link>
      </div>
    );
  }

  return (
    <div className="container cart-page">
      <h1>Shopping Cart</h1>
      
      <div className="cart-content">
        <div className="cart-items">
          {cart.map((item) => (
            <div key={`${item.id}-${item.size}`} className="cart-item">
              <div className="item-image">
                <img src={item.image} alt={item.name} />
              </div>
              <div className="item-details">
                <h3>{item.name}</h3>
                <p className="item-meta">Size: {item.size} | Category: {item.category}</p>
                <div className="item-price">₹{item.price}</div>
              </div>
              <div className="item-quantity">
                <button onClick={() => updateQuantity(item.id, item.size, item.quantity - 1)}><Minus size={16} /></button>
                <span>{item.quantity}</span>
                <button onClick={() => updateQuantity(item.id, item.size, item.quantity + 1)}><Plus size={16} /></button>
              </div>
              <div className="item-total">
                ₹{item.price * item.quantity}
              </div>
              <button className="remove-btn" onClick={() => removeFromCart(item.id, item.size)}>
                <Trash2 size={20} />
              </button>
            </div>
          ))}
        </div>

        <div className="cart-summary">
          <h2>Order Summary</h2>
          <div className="summary-row">
            <span>Subtotal</span>
            <span>₹{cartTotal}</span>
          </div>
          <div className="summary-row">
            <span>Shipping</span>
            <span>Free</span>
          </div>
          <div className="summary-row total">
            <span>Total</span>
            <span>₹{cartTotal}</span>
          </div>
          <Link to="/checkout" className="btn btn-primary checkout-btn">Proceed to Checkout</Link>
          <Link to="/shop" className="continue-shopping">
            <ArrowLeft size={16} /> Continue Shopping
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Cart;
