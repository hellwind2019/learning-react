import React, { useState } from "react";
import { Card, CardContent } from "./ui/card";
import { Button } from "./ui/button";

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
  return (
    <Card className="max-w-md w-full gap-sm rounded-xl shadow-lg border border-gray-400 bg-neutral-300">
      <CardContent className="flex flex-col items-start">
        <h2 className="text-lg font-bold">Player name: </h2>
        <p className="">{game.player.name}</p>
        <Button onClick={handlePlayerClick} className="mb-4 mt-2">
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
        <Button onClick={handlePizzaClick} className="mt-2">
          Add topping
        </Button>
      </CardContent>
    </Card>
  );
};

export default StateExersizesCard;
