import React from 'react';
import './Policies.css';

const ShippingPolicy = () => {
  return (
    <div className="policy-page">
      <h1>Shipping Policy</h1>
      
      <section>
        <h2>Processing Time</h2>
        <p>All orders are processed within 1-2 business days. Orders are not shipped or delivered on weekends or holidays.</p>
      </section>

      <section>
        <h2>Shipping Rates & Delivery Estimates</h2>
        <p>Shipping charges for your order will be calculated and displayed at checkout.</p>
        <ul>
          <li><strong>Standard Shipping:</strong> 5-7 business days - Free for orders above ₹999.</li>
          <li><strong>Express Shipping:</strong> 2-3 business days - ₹150 flat rate.</li>
        </ul>
        <p>Delivery delays can occasionally occur around public holidays.</p>
      </section>

      <section>
        <h2>Shipment Confirmation & Order Tracking</h2>
        <p>You will receive a Shipment Confirmation email once your order has shipped containing your tracking number(s). The tracking number will be active within 24 hours.</p>
      </section>

      <section>
        <h2>Damages</h2>
        <p>Ishti is not liable for any products damaged or lost during shipping. If you received your order damaged, please contact the shipment carrier to file a claim. Please save all packaging materials and damaged goods before filing a claim.</p>
      </section>
    </div>
  );
};

export default ShippingPolicy;
