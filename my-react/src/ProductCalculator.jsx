import React, { useState } from 'react';

const ProductCalculator = () => {
  const [products, setProducts] = useState([
    { name: 'Product 1', quantity: 0, price: 0 },
    { name: 'Product 2', quantity: 0, price: 0 },
    { name: 'Product 3', quantity: 0, price: 0 }
  ]);

  const handleChange = (index, field, value) => {
    const updated = [...products];
    updated[index][field] = parseFloat(value) || 0;
    setProducts(updated);
  };

  const totalAmount = products.reduce(
    (acc, product) => acc + product.quantity * product.price,
    0
  );

  return (
    <div className="card calculator-card shadow-lg p-4">
      <h2 className="text-center text-primary mb-4">Product Price Calculator</h2>
      {products.map((product, index) => (
        <div key={index} className="row mb-3 align-items-end">
          <div className="col-4">
            <label className="form-label">{product.name}</label>
          </div>
          <div className="col-4">
            <input
              type="number"
              className="form-control"
              placeholder="Quantity"
              value={product.quantity}
              onChange={(e) =>
                handleChange(index, 'quantity', e.target.value)
              }
            />
          </div>
          <div className="col-4">
            <input
              type="number"
              className="form-control"
              placeholder="Price"
              value={product.price}
              onChange={(e) => handleChange(index, 'price', e.target.value)}
            />
          </div>
        </div>
      ))}

      <div className="mt-4 result-box bg-light p-3 rounded">
        <h5 className="text-success">Total Amount: ₹{totalAmount.toFixed(2)}</h5>
      </div>
    </div>
  );
};

export default ProductCalculator;
