import { useState } from "react";
import { collection, getDocs, addDoc, setDoc, doc } from "firebase/firestore";
import db from "../service/firebase";

const useFirestore = () => {
  const [products, setProducts] = useState([]);

  const getProducts = async () => {
    try {
      const productsCol = collection(db, "products");
      const productList = await getDocs(productsCol);
      const res = productList.docs.map(
        (doc) => (doc = { id: doc.id, ...doc.data() })
      );
      setProducts(res);
    } catch (error) {
      alert(error);
    }
  };

  const addProduct = async (product) => {
    try {
      const productsCol = collection(db, "products");
      await addDoc(productsCol, product);
    } catch (error) {
      alert(error);
    }
  };

  const updateProduct = async (product, stock) => {
    try {
      await setDoc(doc(db, "products", product.id), { ...product, stock });
    } catch (error) {
      alert(error);
    }
  };

  return { getProducts, addProduct, updateProduct, products };
};

export default useFirestore;
