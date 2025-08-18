import { useState } from "react";
import Like from "../Like";

interface Props {
  items: string[];
  heading: string;
  onSelectItem: (item: string) => void;
}

function ListGroup({ items, heading, onSelectItem }: Props) {
  const [selectedIndex, setSelectedIndex] = useState(-1);

  return (
    <>
      <h1 className="text-lg font-semibold mb-3 text-gray-800 dark:text-gray-100">
        {heading}
      </h1>
      {items.length === 0 && (
        <p className="text-gray-500 dark:text-gray-400">No item found</p>
      )}
      <ul className="bg-red-500 dark:bg-transparent rounded-lg divide-y divide-red-300 dark:divide-red-700">
        {items.map((item, index) => (
          <li
            className={`flex rounded-lg items-center justify-between px-4 py-3 my-1 border-gray-700 border-1 cursor-pointer transition
              ${
                selectedIndex === index
                  ? "bg-blue-300 dark:bg-blue-800"
                  : "hover:bg-green-300 dark:hover:bg-green-900 bg-blue-100 dark:bg-gray-800"
              }`}
            key={item + index}
            onClick={() => {
              setSelectedIndex(index);
              onSelectItem(item);
            }}
          >
            <span className="text-gray-800 dark:text-gray-100">{item}</span>
            <Like
              onClick={() => {
                console.log("Liked the ", item);
              }}
            />
          </li>
        ))}
      </ul>
    </>
  );
}
export default ListGroup;
