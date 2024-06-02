"use client";

import { useEffect, useState } from "react";
import { getCarts } from "../../../utils/api";

const CartList = () => {
  const [carts, setCarts] = useState([]);

  useEffect(() => {
    const fetchCarts = async () => {
      const { data } = await getCarts();
      setCarts(data.carts);
    };
    fetchCarts();
  }, []);

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
      {carts.map((cart) => (
        <div key={cart.id} className="border p-4 rounded shadow">
          <h2 className="text-xl font-bold">Cart {cart.id}</h2>
          <p>Total: {cart.total}</p>
        </div>
      ))}
    </div>
  );
};

export default CartList;
