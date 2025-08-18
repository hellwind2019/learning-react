import React from "react";
import { Button } from "./ui/button";

interface Props {
  cartItems: string[];
  onClear: () => void;
}

const Cart = ({ cartItems, onClear }: Props) => {
  return (
    <div className="bg-white dark:bg-gray-700 rounded-lg shadow p-4">
      <h2 className="text-xl font-semibold mb-2 text-gray-800 dark:text-gray-100">
        Cart
      </h2>
      <ul className="mb-4">
        {cartItems.length === 0 ? (
          <li className="text-gray-500 dark:text-gray-400">
            Your cart is empty.
          </li>
        ) : (
          cartItems.map((item) => (
            <li
              key={item}
              className="py-1 px-1 my-2 border-solid border-b-1 border-black hover:bg-gray-100 dark:hover:bg-gray-800 transition"
            >
              {item}
            </li>
          ))
        )}
      </ul>
      <Button variant={"outline"} onClick={onClear}>
        Clear cart
      </Button>
    </div>
  );
};

export default Cart;
