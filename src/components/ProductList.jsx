import React from "react";
import { useSelector } from "react-redux";
import ProductCard from "./ProductCard";

function ProductList() {
  const products = useSelector((state) => state.products);
  return (
    <div className="row">
      {products.map((prod) => (
        <div key={prod.id} className="col-md-3">
          <ProductCard product={prod} />
        </div>
      ))}
    </div>
  );
}

export default ProductList;
