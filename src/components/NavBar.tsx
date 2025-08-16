import React from "react";

interface Props {
  cartItemsCount: number;
}

const NavBar = ({ cartItemsCount }: Props) => {
  return (
    <nav className="flex items-center justify-between px-4 py-2 mx-4 bg-gray-200 rounded-xl">
      <span className="text-lg font-semibold text-gray-800">My Shop</span>
      <div className="flex items-center gap-2">
        <span className="text-gray-600">Cart</span>
        <span className="inline-flex items-center justify-center w-6 h-6 text-sm font-bold bg-blue-500 text-white rounded-full">
          {cartItemsCount}
        </span>
      </div>
    </nav>
  );
};

export default NavBar;
