import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useCart } from '../context/CartContext';
import './Checkout.css';

const Checkout = () => {
  const { cart, cartTotal, clearCart } = useCart();
  const navigate = useNavigate();
  
  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    address: '',
    city: '',
    zipCode: '',
    phone: ''
  });

  const [paymentMethod, setPaymentMethod] = useState('cod');

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Simulate order placement
    alert('Order placed successfully! Thank you for shopping with TrendyKart.');
    clearCart();
    navigate('/');
  };

  if (cart.length === 0) {
    return <div className="container checkout-page">Your cart is empty.</div>;
  }

  return (
    <div className="container checkout-page">
      <h1>Checkout</h1>
      <div className="checkout-grid">
        <div className="checkout-form-section">
          <h2>Shipping Address</h2>
          <form id="checkout-form" onSubmit={handleSubmit}>
            <div className="form-group">
              <label>Full Name</label>
              <input type="text" name="fullName" required onChange={handleChange} />
            </div>
            <div className="form-group">
              <label>Email</label>
              <input type="email" name="email" required onChange={handleChange} />
            </div>
            <div className="form-group">
              <label>Phone</label>
              <input type="tel" name="phone" required onChange={handleChange} />
            </div>
            <div className="form-group">
              <label>Address</label>
              <textarea name="address" required onChange={handleChange}></textarea>
            </div>
            <div className="form-row">
              <div className="form-group">
                <label>City</label>
                <input type="text" name="city" required onChange={handleChange} />
              </div>
              <div className="form-group">
                <label>Zip Code</label>
                <input type="text" name="zipCode" required onChange={handleChange} />
              </div>
            </div>

            <h2>Payment Method</h2>
            <div className="payment-methods">
              <div className={`payment-option ${paymentMethod === 'cod' ? 'selected' : ''}`} onClick={() => setPaymentMethod('cod')}>
                <input type="radio" name="payment" checked={paymentMethod === 'cod'} readOnly />
                <span>Cash on Delivery (COD)</span>
              </div>
              <div className={`payment-option ${paymentMethod === 'upi' ? 'selected' : ''}`} onClick={() => setPaymentMethod('upi')}>
                <input type="radio" name="payment" checked={paymentMethod === 'upi'} readOnly />
                <span>UPI (GPay, PhonePe)</span>
              </div>
              <div className={`payment-option ${paymentMethod === 'card' ? 'selected' : ''}`} onClick={() => setPaymentMethod('card')}>
                <input type="radio" name="payment" checked={paymentMethod === 'card'} readOnly />
                <span>Credit/Debit Card</span>
              </div>
            </div>
            
            <button type="submit" className="btn btn-primary place-order-btn">Place Order</button>
          </form>
        </div>

        <div className="order-summary">
          <h2>Order Summary</h2>
          <div className="summary-items">
            {cart.map(item => (
              <div key={`${item.id}-${item.size}`} className="summary-item">
                <span>{item.name} x {item.quantity}</span>
                <span>₹{item.price * item.quantity}</span>
              </div>
            ))}
          </div>
          <div className="summary-total">
            <span>Total Amount</span>
            <span>₹{cartTotal}</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Checkout;
