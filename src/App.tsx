import ListGroup from "./components/ListGroup";
import { Loader2Icon, Tags } from "lucide-react";
import { useState } from "react";
import { Button } from "./components/ui/button";
import { produce } from "immer";
import NavBar from "./components/NavBar";
import Cart from "./components/Cart";
import { Card } from "./components/ui/card";
import ShopCard from "./components/ShopCard";
import BugsCard from "./components/BugsCard";
import TagsCard from "./components/TagsCard";
import StateExersizesCard from "./components/GameCard";

function App() {
  const [cartItems, setCartItems] = useState(["Product1", "Product2"]);

  const [tags, setTags] = useState(["happy", "cheerful"]);
  const addTag = () => {
    setTags([...tags, "added tag"]);
  };
  const removeTag = () => {
    setTags(tags.slice(1));
  };
  const [bugs, setBugs] = useState([
    { id: 1, title: "Bug 1", fixed: false },
    { id: 2, title: "Bug 2", fixed: false },
  ]);
  const handleResolveBug = () => {
    // setBugs(bugs.map(bug => bug.id === 1 ? {...bug, fixed : true} : bug))
    setBugs(
      produce((draft) => {
        const bug = draft.find((bug) => bug.id === 1);
        if (bug) bug.fixed = true;
      })
    );
  };

  return (
    <div className="min-h-screen flex flex-col gap-20 items-center justify-center bg-gradient-to-br from-gray-50 to-gray-200 py-10 ">
      <ShopCard
        cartItems={cartItems}
        onClear={() => {
          setCartItems([]);
        }}
      />
      <BugsCard bugs={bugs} onResolve={handleResolveBug} />
      <TagsCard tags={tags} addTag={addTag} removeTag={removeTag} />
      <StateExersizesCard />
    </div>
  );
}
export default App;

// function App() {
//   let items = ["New York", "San Francisco", "Denver", "Kyiv", "London"];
//   const handleSelectItem = (item: string) => {
//     console.log(item);
//   };
//   return (
//     <div>
//       <ListGroup
//         items={items}
//         heading="Cities"
//         onSelectItem={handleSelectItem}
//       />
//     </div>
//   );
// }

// function App() {
//   const [alertVisible, setAlertVisible] = useState(false);

//   return (
//     <>
//       {alertVisible && (
//         <Alert
//           onDismiss={() => {
//             setAlertVisible(false);
//           }}
//         >
//           Hello World
//         </Alert>
//       )}
//       <Button
//         text="Click me"
//         color="danger"
//         onClick={() => {
//           setAlertVisible(true);
//         }}
//       />
//     </>
//   );
// }
