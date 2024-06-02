import CartList from "../components/cart/CartList";

const CartPage = () => {
  return (
    <div className="container mx-auto p-4">
      <h1 className="text-3xl font-bold mb-4">Cart Items</h1>
      <CartList />
    </div>
  );
};

export default CartPage;
