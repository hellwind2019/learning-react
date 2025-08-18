import { useRef, useState, type FormEvent } from "react";
import { Button } from "./ui/button";
import { Card, CardAction, CardContent } from "./ui/card";
import { Input } from "./ui/input";
import { Label } from "./ui/label";
import { useForm, type FieldValues } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";

const schema = z.object({
  name: z.string().min(3, { message: "Name must me at least 3 chars" }),
  age: z
    .number({ message: "Age field is required" })
    .min(18, { message: "Age must be at least 18 years" })
    .max(99, { message: "Age can't be bigger than 99" }),
});
type FormData = z.infer<typeof schema>;

const Form = () => {
  // const nameRef = useRef<HTMLInputElement>(null);
  // const ageRef = useRef<HTMLInputElement>(null);
  // const person = { name: "", age: 0 };
  // const [person, setPerson] = useState({
  //   name: "",
  //   age: "",
  // });
  // const handleSubmit = (event: FormEvent) => {
  //   event.preventDefault();
  //   console.log(person);

  // const nameCurr = nameRef.current;
  // const ageCurr = ageRef.current;
  // if (nameCurr !== null) {
  //   person.name = nameCurr.value;
  // }
  // if (ageCurr !== null) {
  //   person.age = parseInt(ageCurr.value);
  // }
  // console.log(person);
  const {
    register,
    handleSubmit,
    formState: { errors, isValid },
  } = useForm<FormData>({ resolver: zodResolver(schema), mode: "onChange" });
  const onSubmit = (data: FieldValues) => console.log(data);

  return (
    <Card className="max-w-md w-full rounded-xl shadow-lg border border-gray-400 bg-neutral-300 dark:bg-gray-800 dark:border-gray-700">
      <CardContent>
        <form onSubmit={handleSubmit(onSubmit)}>
          <div className="mb-3">
            <Label htmlFor="name" className="pb-3">
              Name
            </Label>
            <Input {...register("name")} id="name" type="text" />
            {errors.name && (
              <p className="text-rose-500">{errors.name.message}</p>
            )}
          </div>
          <div className="mb-3">
            <Label htmlFor="age" className="pb-3">
              Age
            </Label>
            <Input
              {...register("age", { valueAsNumber: true })}
              id="age"
              type="number"
            />
            {errors.age && (
              <p className="text-rose-500">{errors.age.message}</p>
            )}
          </div>

          <CardAction>
            <Button variant={"outline"} disabled={!isValid} type="submit">
              Submit
            </Button>
          </CardAction>
        </form>
      </CardContent>
    </Card>
  );
};
export default Form;
