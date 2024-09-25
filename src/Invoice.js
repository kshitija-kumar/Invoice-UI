import React, { useState } from 'react';
import './Invoice.css'; // Optional for custom styles

const Invoice = () => {
  const [items, setItems] = useState([
    { description: 'Web Development Services', quantity: 1, price: 500 },
    { description: 'SEO Optimization', quantity: 2, price: 150 },
  ]);

  const calculateTotal = () => {
    return items.reduce((total, item) => total + item.quantity * item.price, 0);
  };

  return (
    <div className="invoice-container">
      <h1>Invoice</h1>
      <div className="invoice-header">
        <h2>Company Name</h2>
        <p>Date: {new Date().toLocaleDateString()}</p>
      </div>
      <table className="invoice-table">
        <thead>
          <tr>
            <th>Description</th>
            <th>Quantity</th>
            <th>Price</th>
            <th>Total</th>
          </tr>
        </thead>
        <tbody>
          {items.map((item, index) => (
            <tr key={index}>
              <td>{item.description}</td>
              <td>{item.quantity}</td>
              <td>${item.price.toFixed(2)}</td>
              <td>${(item.quantity * item.price).toFixed(2)}</td>
            </tr>
          ))}
        </tbody>
      </table>
      <div className="invoice-total">
        <h3>Total Amount: ${calculateTotal().toFixed(2)}</h3>
      </div>
      <button className="invoice-button">Download Invoice</button>
    </div>
  );
};

export default Invoice;
