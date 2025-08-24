import { Card } from "@/components/ui/card";
import axios, { AxiosError } from "axios";
import { useEffect, useState } from "react";

interface User {
  id: number;
  name: string;
}

const BackendPage = () => {
  const [users, setUsers] = useState<User[]>([]);
  const [error, setError] = useState("");
  useEffect(() => {
    const fetchUsers = async () => {
      try {
        const res = await axios.get<User[]>(
          "https://jsonplaceholder.typicode.com/users"
        );
        setUsers(res.data);
      } catch (err) {
        setError((err as AxiosError).message);
      }
    };
    fetchUsers();

    //get -> await promice ->res/err
    //   .then((res) => setUsers(res.data))
    //   .catch((err) => setError(err.message));
  }, []);
  return (
    <div className="min-h-screen flex lg:flex-row flex-col gap-14 lg:items-start items-center lg:justify-center justify-start">
      <Card className="max-w-sm w-full rounded-xl shadow-lg border border-gray-400 bg-neutral-300 dark:bg-gray-800 dark:border-gray-700">
        <h1 className="text-lg font-bold m-auto">Users</h1>
        <p className="text-red-400 text-center">{error}</p>
        <ul className="divide-y divide-gray-400 dark:divide-gray-700">
          {users.map((user) => (
            <li
              key={user.id}
              className="py-2 px-4 text-left hover:bg-gray-200 dark:hover:bg-gray-700 transition "
            >
              {user.id}. {user.name}
            </li>
          ))}
        </ul>
      </Card>
    </div>
  );
};

export default BackendPage;
