import { useState } from "react";
import { produce } from "immer";
import ShopCard from "./ShopCard";
import BugsCard from "./BugsCard";
import TagsCard from "./TagsCard";
import StateExersizesCard from "./GameCard";
import Form from "./Form";

const HomePage = () => {
  const [cartItems, setCartItems] = useState(["Product1", "Product2"]);
  const [tags, setTags] = useState(["happy", "cheerful"]);
  const addTag = () => setTags([...tags, "added tag"]);
  const removeTag = () => setTags(tags.slice(1));
  const [bugs, setBugs] = useState([
    { id: 1, title: "Bug 1", fixed: false },
    { id: 2, title: "Bug 2", fixed: false },
  ]);
  const handleResolveBug = () => {
    setBugs(
      produce((draft) => {
        const bug = draft.find((bug) => bug.id === 1);
        if (bug) bug.fixed = true;
      })
    );
  };

  return (
    <div className="min-h-screen flex flex-col gap-14 items-center justify-center">
      <ShopCard cartItems={cartItems} onClear={() => setCartItems([])} />
      <BugsCard bugs={bugs} onResolve={handleResolveBug} />
      <TagsCard tags={tags} addTag={addTag} removeTag={removeTag} />
      <StateExersizesCard />
      <Form />
    </div>
  );
};

export default HomePage;
