import React from 'react';
import './Policies.css';

const Returns = () => {
  return (
    <div className="policy-page">
      <h1>Returns & Exchanges</h1>
      
      <section>
        <h2>Return Policy</h2>
        <p>We want you to be completely satisfied with your purchase. If you're not happy with your order, we accept returns within 30 days of purchase.</p>
        <p>To be eligible for a return, your item must be unused, in the same condition that you received it, and in the original packaging.</p>
      </section>

      <section>
        <h2>How to initiate a return</h2>
        <ol>
          <li>Log in to your account and go to 'My Orders'.</li>
          <li>Select the order and item(s) you wish to return.</li>
          <li>Choose a reason for the return and submit the request.</li>
          <li>You will receive a return shipping label via email.</li>
        </ol>
      </section>

      <section>
        <h2>Refunds</h2>
        <p>Once your return is received and inspected, we will send you an email to notify you that we have received your returned item. We will also notify you of the approval or rejection of your refund.</p>
        <p>If approved, your refund will be processed, and a credit will automatically be applied to your credit card or original method of payment, within 5-7 business days.</p>
      </section>

      <section>
        <h2>Exchanges</h2>
        <p>We only replace items if they are defective or damaged. If you need to exchange it for the same item, send us an email at support@ishti.com.</p>
      </section>
    </div>
  );
};

export default Returns;
