import React from "react";
import NewExpenceForm from "./components/NewExpenceForm";

const ExpenceTracker = () => {
  return (
    <div className="min-h-screen flex flex-col gap-14 items-center justify-start">
      <NewExpenceForm />
    </div>
  );
};

export default ExpenceTracker;
