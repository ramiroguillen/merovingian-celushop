import { useEffect } from "react";
import ProductsTable from "./components/ProductsTable";
import ProductForm from "./components/ProductForm";
import useFirestore from "./hooks/useFirestore";

function App() {
  const { getProducts, products } = useFirestore();
  useEffect(() => {
    getProducts();
  }, [products, getProducts]);
  return (
    <>
      <h1>Productos</h1>
      <ProductsTable products={products} />
      <h2>Agregar Producto</h2>
      <ProductForm />
    </>
  );
}

export default App;
