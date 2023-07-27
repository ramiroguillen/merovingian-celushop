import React, { useRef } from "react";
import useFirestore from "../hooks/useFirestore";

const ProductForm = () => {
  const { addProduct } = useFirestore();
  const nameRef = useRef();
  const descRef = useRef();
  const stockRef = useRef();
  const priceRef = useRef();

  const handleSubmit = (e) => {
    e.preventDefault();
    const newProduct = {
      name: nameRef.current.value,
      description: descRef.current.value,
      stock: Number(stockRef.current.value),
      price: Number(priceRef.current.value),
    };
    addProduct(newProduct);
  };

  return (
    <form onSubmit={handleSubmit}>
      <label>Nombre del producto:</label>
      <input type="text" ref={nameRef}></input>
      <label>Descripción:</label>
      <input type="text" ref={descRef}></input>
      <label>Cantidad de Stock:</label>
      <input type="number" ref={stockRef}></input>
      <label>Precio:</label>
      <input type="number" ref={priceRef}></input>
      <button type="submit">Agregar Producto</button>
    </form>
  );
};

export default ProductForm;
