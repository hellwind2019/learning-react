import { useEffect, useState } from "react";
import NewExpenceForm from "./components/ExpenceForm";
import { DataTable } from "./data-table";
import { columns } from "./columns";
import { Card, CardContent } from "@/components/ui/card";

type Expence = {
  id: string;
  description: string;
  amount: number;
  category: string;
};

export const Expences: Expence[] = [
  {
    id: "1",
    description: "Supermarket groceries",
    amount: 520,
    category: "groceries",
  },
  {
    id: "2",
    description: "Coffee at local cafe",
    amount: 70,
    category: "cafe",
  },
  {
    id: "3",
    description: "Steam game purchase",
    amount: 350,
    category: "games",
  },
  {
    id: "4",
    description: "Bus ticket",
    amount: 30,
    category: "transport",
  },
  {
    id: "5",
    description: "Electricity bill",
    amount: 400,
    category: "utilities",
  },
  {
    id: "6",
    description: "Movie night",
    amount: 150,
    category: "entertainment",
  },
  {
    id: "7",
    description: "Miscellaneous shopping",
    amount: 90,
    category: "shopping",
  },
];

function getData(): Promise<Expence[]> {
  return new Promise((resolve) => {
    setTimeout(() => resolve(Expences), 500); // simulate async
  });
}

function ExpenceTracker() {
  const [data, setData] = useState<Expence[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    getData().then((expences) => {
      setData(expences);
      setLoading(false);
    });
  }, []);

  return (
    <div className="min-h-screen flex flex-col gap-14 items-center justify-start">
      <NewExpenceForm />
      {loading ? (
        <div className="text-gray-500">Loading...</div>
      ) : (
        <Card className="max-w-md w-full rounded-xl shadow-lg border border-gray-400 bg-neutral-300 dark:bg-gray-800 dark:border-gray-700">
          <CardContent>
            <DataTable columns={columns} data={data} />
          </CardContent>
        </Card>
      )}
    </div>
  );
}

export default ExpenceTracker;
