import { Card, CardAction, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";

import { CategoryBox } from "./ComboBox";
import { Button } from "@/components/ui/button";
export const categories = [
  {
    value: "groceries",
    label: "Groceries",
  },
  {
    value: "cafe",
    label: "Cafe",
  },
  {
    value: "games",
    label: "Games",
  },
  {
    value: "transport",
    label: "Transport",
  },
  {
    value: "utilities",
    label: "Utilities",
  },
  {
    value: "entertainment",
    label: "Entertainment",
  },
  {
    value: "other",
    label: "Other",
  },
];
const NewExpenceForm = () => {
  return (
    <Card className="max-w-md w-full rounded-xl shadow-lg border border-gray-400 bg-neutral-300 dark:bg-gray-800 dark:border-gray-700">
      <CardContent>
        <form className="flex gap- flex-col">
          <Label htmlFor="desc">Description</Label>
          <Input className="mb-4 mt-2" id="desc" type="text"></Input>
          <Label htmlFor="amount">Amount</Label>
          <Input className="mb-4 mt-2" id="amount" type="text"></Input>
          <Label htmlFor="">Category</Label>
          <CategoryBox
            onSelect={(category) => {
              console.log(category);
            }}
            categories={categories}
          />
        </form>
        <CardAction>
          <Button className="bg-emerald-500">Add</Button>
        </CardAction>
      </CardContent>
    </Card>
  );
};

export default NewExpenceForm;
