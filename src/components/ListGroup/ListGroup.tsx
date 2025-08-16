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
      <h1 className="text-lg font-semibold mb-3">{heading}</h1>
      {items.length === 0 && <p className="text-gray-500">No item found</p>}
      <ul className="bg-transparent rounded-lg dark:bg-gray-900 divide-y divide-gray-400 dark:divide-gray-700">
        {items.map((item, index) => (
          <li
            className={`flex rounded-lg items-center justify-between px-4 py-3 hover:bg-green-300 cursor-pointer transition
              ${
                selectedIndex === index
                  ? "bg-blue-300 dark:bg-blue-900"
                  : "bg-blue-100"
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
