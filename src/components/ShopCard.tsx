import React from "react";
import Cart from "./Cart";
import NavBar from "./NavBar";
import { Card } from "./ui/card";

interface Props {
  cartItems: string[];
  onClear: (items: string[]) => void;
}

const ShopCard = ({ cartItems, onClear }: Props) => {
  return (
    <Card className="max-w-md w-full rounded-xl shadow-lg border border-gray-400 bg-neutral-300">
      {/* <CardHeader className="border-b pb-4 mb-4 bg-gray-200 rounded-t-xl"> */}
      <NavBar cartItemsCount={cartItems.length} />
      {/* </CardHeader> */}
      <div className="px-6 pb-6">
        <Cart
          cartItems={cartItems}
          onClear={() => {
            onClear([]);
          }}
        />
      </div>
    </Card>
  );
};

export default ShopCard;
