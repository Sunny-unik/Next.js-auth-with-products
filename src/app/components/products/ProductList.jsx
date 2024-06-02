import { useEffect, useState } from "react";
import { getProducts } from "../../../utils/api";

const ProductList = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    const fetchProducts = async () => {
      const { data } = await getProducts();
      setProducts(data.products);
    };
    fetchProducts();
  }, []);

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
      {products.map((product) => (
        <div key={product.id} className="border p-4 rounded shadow">
          <h2 className="text-xl font-bold">{product.title}</h2>
          <br />
          <p>{product.description}</p>
        </div>
      ))}
    </div>
  );
};

export default ProductList;
