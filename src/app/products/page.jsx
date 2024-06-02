"use client";

import WithAuth from "../../utils/auth";
import ProductList from "../components/products/ProductList";

const ProductsPage = () => {
  return (
    <div className="container mx-auto p-4">
      <h1 className="text-3xl font-bold mb-4">Products</h1>
      <ProductList />
    </div>
  );
};

export default WithAuth(ProductsPage);
