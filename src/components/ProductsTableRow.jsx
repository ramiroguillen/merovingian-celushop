import React, { useRef } from "react";
import useFirestore from "../hooks/useFirestore";

const ProductsTableRow = ({ product }) => {
  const { id, name, description, stock, price } = product;
  const { updateProduct } = useFirestore();
  const inputRef = useRef();

  const increment = () => {
    updateProduct(product, stock + 1);
  };

  const decrement = () => {
    updateProduct(product, stock - 1);
  };

  const changeStock = () => {
    updateProduct(product, Number(inputRef.current.value));
  };

  return (
    <tr>
      <td>{id}</td>
      <td>{name}</td>
      <td>{description}</td>
      <td>{stock}</td>
      <td>{price}</td>
      <td>
        <button onClick={decrement}>-</button>
        <button onClick={increment}>+</button>
        <button onClick={changeStock}>Cambiar Stock a</button>
        <input type="number" ref={inputRef} />
      </td>
    </tr>
  );
};

export default ProductsTableRow;
