import { useRef, type FormEvent } from "react";
import { Button } from "./ui/button";
import { Card, CardAction, CardContent } from "./ui/card";
import { Input } from "./ui/input";
import { Label } from "./ui/label";

const Form = () => {
  const nameRef = useRef<HTMLInputElement>(null);
  const ageRef = useRef<HTMLInputElement>(null);
  const handleSubmit = (event: FormEvent) => {
    event.preventDefault();
    if (nameRef.current !== null) {
      console.log(nameRef.current.value);
    }
  };
  return (
    <Card className="max-w-md w-full gap-sm rounded-xl shadow-lg border border-gray-400 bg-neutral-300">
      <CardContent>
        <form onSubmit={handleSubmit}>
          <div className="mb-3">
            <Label htmlFor="name" className="pb-3">
              Name
            </Label>
            <Input ref={nameRef} id="name" type="text" />
          </div>
          <div className="mb-3">
            <Label htmlFor="age" className="pb-3">
              Age
            </Label>
            <Input ref={ageRef} id="age" type="number" />
          </div>
          <CardAction>
            <Button type="submit">Submit</Button>
          </CardAction>
        </form>
      </CardContent>
    </Card>
  );
};
export default Form;
