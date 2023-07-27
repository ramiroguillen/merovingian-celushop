import React from "react";
import ProductsTableRow from "./ProductsTableRow";

const ProductsTable = ({ products }) => {
  return (
    <table>
      <tbody>
        <tr>
          <th>ID</th>
          <th>Nombre del producto</th>
          <th>Descripción</th>
          <th>Cantidad de Stock</th>
          <th>Precio</th>
        </tr>

        {products.map((product) => (
          <ProductsTableRow key={product.id} product={product} />
        ))}
        
      </tbody>
    </table>
  );
};

export default ProductsTable;
