import React from 'react';
import { MapPin, Phone, Mail, MessageCircle } from 'lucide-react';
import './Contact.css';

const Contact = () => {
  return (
    <div className="container contact-page">
      <h1>Contact Us</h1>
      <div className="contact-grid">
        <div className="contact-info">
          <h2>Get in Touch</h2>
          <p>Have questions? We'd love to hear from you. Send us a message and we'll respond as soon as possible.</p>
          
          <div className="info-item">
            <MapPin className="icon" size={24} />
            <div>
              <h3>Visit Us</h3>
              <p>123 Fashion Street, Bandra West, Mumbai, Maharashtra 400050</p>
            </div>
          </div>
          
          <div className="info-item">
            <Phone className="icon" size={24} />
            <div>
              <h3>Call Us</h3>
              <p>+91 98765 43210</p>
              <p>Mon-Sat, 9am - 7pm</p>
            </div>
          </div>
          
          <div className="info-item">
            <Mail className="icon" size={24} />
            <div>
              <h3>Email Us</h3>
              <p>support@trendykart.com</p>
            </div>
          </div>

          <a href="https://wa.me/919876543210" target="_blank" rel="noopener noreferrer" className="whatsapp-btn">
            <MessageCircle size={24} /> Chat on WhatsApp
          </a>
        </div>

        <div className="contact-form-section">
          <h2>Send Message</h2>
          <form className="contact-form">
            <div className="form-group">
              <label>Name</label>
              <input type="text" placeholder="Your Name" required />
            </div>
            <div className="form-group">
              <label>Email</label>
              <input type="email" placeholder="Your Email" required />
            </div>
            <div className="form-group">
              <label>Subject</label>
              <input type="text" placeholder="Subject" required />
            </div>
            <div className="form-group">
              <label>Message</label>
              <textarea placeholder="Your Message" rows="5" required></textarea>
            </div>
            <button type="submit" className="btn btn-primary">Send Message</button>
          </form>
        </div>
      </div>
      
      <div className="map-section">
        <iframe 
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3771.441164626166!2d72.82869531490063!3d19.04433298710637!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3be7c9410830616d%3A0x111b63353dbbce01!2sBandra%20West%2C%20Mumbai%2C%20Maharashtra!5e0!3m2!1sen!2sin!4v1645523456789!5m2!1sen!2sin" 
          width="100%" 
          height="400" 
          style={{border:0}} 
          allowFullScreen="" 
          loading="lazy"
        ></iframe>
      </div>
    </div>
  );
};

export default Contact;
