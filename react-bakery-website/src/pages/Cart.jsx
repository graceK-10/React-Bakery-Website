import React from "react";
import { useCart } from "../CartContext";
import Navbar from "../components/Navbar";

const Cart = () => {
  const {
    cart,
    increaseItemQuantity,
    decreaseItemQuantity,
    removeItemFromCart,
  } = useCart();

  const getTotalPrice = () => {
    return cart
      .reduce((total, item) => total + item.price * item.quantity, 0)
      .toFixed(2);
  };

  return (
    <>
      <Navbar />
      <div className="max-w-7xl mx-auto p-4">
        <h1 className="text-5xl font-bold text-white/80 text-outline-tertiary text-shadow mt-[7rem] mb-12 text-center">
          Your Cart
        </h1>
        <div className="flex flex-col lg:flex-row justify-between">
          <div className="flex-1 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {cart.map((item) => (
              <div key={item.id} className="border p-4 rounded-lg shadow-lg">
                <img
                  src={item.img}
                  alt={item.title}
                  className="w-full h-48 object-cover rounded-t-lg"
                />
                <h2 className="text-lg text-white font-semibold mt-4">
                  {item.title}
                </h2>
                <div className="flex justify-around items-center mt-6">
                  <button
                    onClick={() => decreaseItemQuantity(item.id)}
                    className="btn font-bold text-white text-3xl hover:text-primary"
                  >
                    -
                  </button>
                  <span className="text-white">{item.quantity}</span>
                  <button
                    onClick={() => increaseItemQuantity(item.id)}
                    className="btn font-bold text-white text-2xl hover:text-primary"
                  >
                    +
                  </button>
                </div>
                <button
                  onClick={() => removeItemFromCart(item.id)}
                  className="btn mt-4 text-white border-b hover:border-b-primary hover:text-primary"
                >
                  Remove
                </button>
              </div>
            ))}
          </div>
          <div className="flex-2 lg:w-1/3 p-4 bg-gray-800 text-white rounded-lg shadow-lg mt-8 mx-3 lg:mt-0 max-h-[490px] overflow-y-auto">
            <h2 className="text-3xl font-bold">Order Summary</h2>
            <ul className="mt-4">
              {cart.map((item) => (
                <li key={item.id} className="flex justify-between mt-2">
                  <span>
                    {item.title} ({item.quantity})
                  </span>
                  <span>R{(item.price * item.quantity).toFixed(2)}</span>
                </li>
              ))}
            </ul>
            <div className="mt-4 border-t pt-4 flex justify-between">
              <span>Total</span>
              <span>R{getTotalPrice()}</span>
            </div>
            <button className="btn mt-4 w-full">Checkout</button>
          </div>
        </div>
      </div>
    </>
  );
};

export default Cart;
