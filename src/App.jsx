import React, { useState } from "react";
import ProductList from "./components/ProductList";
import Cart from "./components/Cart";
import AddProductModal from "./components/AddProductModal";

function App() {
  const [showModal, setShowModal] = useState(false);
  return (
    <div className="container mt-4">
      <div className="d-flex justify-content-between align-items-center mb-4">
        <h1>Shopping Cart</h1>
        <button className="btn btn-success" onClick={() => setShowModal(true)}>
          Add Product
        </button>
      </div>
      <AddProductModal show={showModal} onClose={() => setShowModal(false)} />
      <ProductList />
      <Cart />
    </div>
  );
}

export default App;
