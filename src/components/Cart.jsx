import React from "react";
import { useSelector } from "react-redux";

function Cart() {
  const cart = useSelector((state) => state.cart);
  const total = cart.reduce((sum, item) => sum + item.price, 0);
  return (
    <div className="mt-5">
      <h2>Cart</h2>
      <table className="table">
        <thead>
          <tr>
            <th>#</th>
            <th>Title</th>
            <th>Price</th>
          </tr>
        </thead>
        <tbody>
          {cart.map((item, idx) => (
            <tr key={idx}>
              <td>{idx + 1}</td>
              <td>{item.title}</td>
              <td>${item.price}</td>
            </tr>
          ))}
          <tr>
            <td colSpan="2" className="text-end fw-bold">
              Total Price =
            </td>
            <td className="fw-bold">{total} Etb</td>
          </tr>
        </tbody>
      </table>
    </div>
  );
}

export default Cart;
