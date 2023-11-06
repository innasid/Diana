import React, { useState } from "react";
import { useSelector } from "react-redux";

function BillProduct() {
  const cart = useSelector((state) => state.product);

  const displayProduct = () => {
    return cart.map((product) => (
      <tr>
        <td>{product.id}</td>
        <td>{product.name}</td>
        <td>{product.cost}</td>
        <td>{product.quantity}</td>
        <td>{product.cost * product.quantity}</td>
      </tr>
    ));
  };

  return (
    <div>
      <div>
        <table className="table">
          <thead>
            <tr>
              <th>ID</th>
              <th>Product Name</th>
              <th>Price</th>
              <th>Quantity</th>
              <th>Total</th>
            </tr>
          </thead>
          <tbody>{displayProduct()}</tbody>
        </table>
      </div>
    </div>
  );
}

export default BillProduct;