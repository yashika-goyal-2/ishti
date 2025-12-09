import React from 'react';
import './Policies.css';

const FAQ = () => {
  return (
    <div className="policy-page">
      <h1>Frequently Asked Questions</h1>
      
      <div className="faq-content">
        <div className="faq-section">
          <h3>How do I track my order?</h3>
          <p className="faq-answer">Once your order is shipped, you will receive an email with a tracking number and a link to track your package.</p>
        </div>

        <div className="faq-section">
          <h3>What payment methods do you accept?</h3>
          <p className="faq-answer">We accept all major credit cards, debit cards, UPI, and Net Banking. Cash on Delivery (COD) is also available for select pin codes.</p>
        </div>

        <div className="faq-section">
          <h3>How can I return an item?</h3>
          <p className="faq-answer">You can initiate a return within 30 days of delivery. Please visit our Returns & Exchanges page for more details.</p>
        </div>

        <div className="faq-section">
          <h3>Do you ship internationally?</h3>
          <p className="faq-answer">Currently, we only ship within India. We are working on expanding our services to other countries soon.</p>
        </div>

        <div className="faq-section">
          <h3>How do I contact customer support?</h3>
          <p className="faq-answer">You can reach us at support@ishti.com or call us at +91 98765 43210 (Mon-Fri, 9am-6pm).</p>
        </div>
      </div>
    </div>
  );
};

export default FAQ;
