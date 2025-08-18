import React, { useState } from "react";
import { Card, CardContent } from "./ui/card";
import { Button } from "./ui/button";
import { produce } from "immer";

const StateExersizesCard = () => {
  const [game, setGame] = useState({
    id: 1,
    player: {
      name: "Player 1",
    },
  });
  const handlePlayerClick = () => {
    //change player name
    setGame({ ...game, player: { name: "John" } });
  };

  const [pizza, setPizza] = useState({
    name: "Pepperoni",
    toppings: ["cheese"],
  });
  const handlePizzaClick = () => {
    setPizza({ ...pizza, toppings: [...pizza.toppings, "Toping"] });
  };

  const [cart, setCart] = useState({
    discount: 0.1,
    items: [
      { id: 1, title: "Coca-Cola", quantity: 1 },
      { id: 2, title: "Nuts", quantity: 1 },
    ],
  });
  const handleCartClick = (id: number) => {
    setCart(
      produce((draft) => {
        const item = draft.items.find((item) => item.id === id);
        if (item) item.quantity += 1;
      })
    );
  };

  return (
    <Card className="max-w-md w-full rounded-xl shadow-lg border border-gray-400 bg-neutral-300 dark:bg-gray-800 dark:border-gray-700">
      <CardContent className="flex flex-col items-start">
        <h2 className="text-lg font-bold">Player name: </h2>
        <p className="">{game.player.name}</p>
        <Button
          variant={"outline"}
          onClick={handlePlayerClick}
          className="mb-4 mt-2"
        >
          {" "}
          Change player name
        </Button>
        <h2 className="text-lg font-bold">Pizza name:</h2>
        <p className="">{pizza.name}</p>
        <h2 className="text-base font-semibold">Toppings:</h2>
        <ul>
          {pizza.toppings.map((t, index) => (
            <li className="font-mono" key={index}>
              {t}
            </li>
          ))}
        </ul>
        <Button variant={"outline"} onClick={handlePizzaClick} className="mt-2">
          Add topping
        </Button>

        <h2 className="text-lg font-bold my-2">Cart</h2>
        <p className="text-sm">Discount: {cart.discount * 100}%</p>
        <ul>
          {cart.items.map((item) => (
            <li
              className="select-none"
              onClick={() => {
                handleCartClick(item.id);
              }}
              key={item.id}
            >
              {item.title} : {item.quantity}x
            </li>
          ))}
        </ul>
      </CardContent>
    </Card>
  );
};

export default StateExersizesCard;
