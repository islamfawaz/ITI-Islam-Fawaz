import React from 'react';
import Product from "./Product";

function Cart({ cartItems, handleCounter, handleDelete, handleReset }) {
  return (
    <main className="container mt-5">
      <div className="d-flex justify-content-between align-items-center">
        <h1>Cart</h1>
        {cartItems.length > 0 && (
          <button
            className="btn btn-outline-danger px-5 py-1"
            onClick={handleReset}
          >
            Reset
          </button>
        )}
      </div>
      <hr />
      <ul className="d-flex flex-wrap p-0 m-0 mt-4" style={{ gap: "2em" }}>
        {cartItems &&
          cartItems.map((item) => (
            <Product
              key={item.id}
              id={item.id}
              productName={item.name}
              count={item.count}
              handleCounter={handleCounter}
              handleDelete={handleDelete}
            />
          ))}
      </ul>
      {!cartItems.length && <p>Your cart is empty.</p>}
    </main>
  );
}

export default Cart;
