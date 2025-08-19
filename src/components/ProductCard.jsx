import React from "react";
import { useDispatch } from "react-redux";
import { addToCart } from "../store/actions";

function ProductCard({ product }) {
  const dispatch = useDispatch();
  return (
    <div className="card mb-4">
      <div className="card-body">
        <h5 className="card-title">{product.title}</h5>
        <p className="card-text">{product.description}</p>
        <p className="card-text fw-bold">${product.price}</p>
        <button
          className="btn btn-primary"
          onClick={() => dispatch(addToCart(product))}
        >
          Add to Cart
        </button>
      </div>
    </div>
  );
}

export default ProductCard;
