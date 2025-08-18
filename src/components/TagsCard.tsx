import React from "react";
import { Button } from "./ui/button";
import ListGroup from "./ListGroup";
import { Card } from "./ui/card";

interface Props {
  tags: string[];
  addTag: () => void;
  removeTag: () => void;
}

const TagsCard = ({ tags, addTag, removeTag }: Props) => {
  return (
    <Card className="max-w-md w-full rounded-xl shadow-lg border border-gray-400 bg-neutral-300 dark:bg-gray-800 dark:border-gray-700 p-4">
      {/* <Button text="Fix bug" onClick={handleClick} /> */}

      <ListGroup heading="tags" items={tags} onSelectItem={() => {}} />
      <Button variant={"outline"} onClick={addTag}>
        Add Element
      </Button>
      <Button variant={"outline"} onClick={removeTag}>
        Remove Element
      </Button>
    </Card>
  );
};

export default TagsCard;
