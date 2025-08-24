import { Card, CardAction, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";

import { CategoryBox } from "./ComboBox";
import { Button } from "@/components/ui/button";
import { z } from "zod";
import { useForm, type FieldValue, type FieldValues } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
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

interface Props {
  onSubmit: (data: FormData) => void;
}

const schema = z.object({
  description: z.string().min(3, { error: "At least 3 characters" }),
  amount: z.number().positive({ error: "Amount should be positive" }),
  category: z.string({ error: "Please choose category" }).nonempty(),
});
type FormData = z.infer<typeof schema>;

const NewExpenceForm = ({ onSubmit }: Props) => {
  const {
    register,
    handleSubmit,
    setValue,
    formState: { errors },
  } = useForm<FormData>({
    resolver: zodResolver(schema),
    mode: "onChange",
  });

  return (
    <Card className="max-w-md w-full rounded-xl shadow-lg border border-gray-400 bg-neutral-300 dark:bg-gray-800 dark:border-gray-700">
      <CardContent>
        <form onSubmit={handleSubmit(onSubmit)} className="flex gap- flex-col">
          <Label htmlFor="desc">Description</Label>
          <Input
            {...register("description")}
            className="mb-4 mt-2"
            id="desc"
            type="text"
          ></Input>
          <Label htmlFor="amount">Amount</Label>
          <Input
            {...register("amount", { valueAsNumber: true })}
            className="mb-4 mt-2"
            id="amount"
            type="number"
          ></Input>
          <Label htmlFor="">Category</Label>
          <CategoryBox
            {...register("category")}
            onSelect={(category) => {
              setValue("category", category);
            }}
            categories={categories}
          />
          {errors.amount && (
            <p className="text-rose-500">{errors.amount.message}</p>
          )}
          {errors.category && (
            <p className="text-rose-500">{errors.category.message}</p>
          )}
          {errors.description && (
            <p className="text-rose-500">{errors.description.message}</p>
          )}
          <CardAction>
            <Button type="submit" className="bg-emerald-500">
              Add
            </Button>
          </CardAction>
        </form>
      </CardContent>
    </Card>
  );
};

export default NewExpenceForm;
