import React from 'react';

function Product({ id, productName, count, handleCounter, handleDelete }) {
  return (
    <li
      className="list-group-item d-flex justify-content-between align-items-center"
      style={{ width: "200px", border: "1px solid black" }}
    >
      <span>{productName}</span>
      <div>
        <button
          className="btn btn-sm btn-outline-primary"
          onClick={() => handleCounter(id, 1)}
        >
          +
        </button>
        <span className="mx-2">{count}</span>
        <button
          className="btn btn-sm btn-outline-primary"
          onClick={() => handleCounter(id, -1)}
          disabled={count === 0}
        >
          -
        </button>
      </div>
      <button
        className="btn btn-sm btn-outline-danger"
        onClick={() => handleDelete(id)}
      >
        x
      </button>
    </li>
  );
}

export default Product;
