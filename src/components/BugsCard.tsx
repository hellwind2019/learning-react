import React from "react";
import { Card } from "./ui/card";
import { Button } from "./ui/button";

interface Bug {
  id: number;
  title: string;
  fixed: boolean;
}
interface Props {
  bugs: Bug[];
  onResolve: () => void;
}

const BugsCard = ({ bugs, onResolve }: Props) => {
  return (
    <Card className="max-w-md w-full rounded-xl shadow-lg border border-gray-400 bg-neutral-300 dark:bg-gray-800 dark:border-gray-700">
      {bugs.map((bug) => (
        <ul className="mx-4 my-1">
          <li key={bug.id} className="border-black border-b-1">
            {bug.title} {bug.fixed ? "Fixed" : "New"}
          </li>
        </ul>
      ))}

      <div className="m-auto">
        <Button variant={"outline"} onClick={onResolve} size="sm">
          Resolve Bug
        </Button>
      </div>
    </Card>
  );
};

export default BugsCard;
