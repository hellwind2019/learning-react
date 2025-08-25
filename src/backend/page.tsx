import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import axios, { AxiosError, CanceledError } from "axios";
import { useEffect, useState } from "react";

interface User {
  id: number;
  name: string;
}

const BackendPage = () => {
  const [users, setUsers] = useState<User[]>([]);
  const [error, setError] = useState("");
  const [isLoading, setLoading] = useState(false);
  useEffect(() => {
    const contoller = new AbortController();
    setLoading(true);
    axios
      .get<User[]>("https://jsonplaceholder.typicode.com/users", {
        signal: contoller.signal,
      })
      .then((res) => {
        setUsers(res.data);
        setLoading(false);
      })
      .catch((err) => {
        if (err instanceof CanceledError) return;
        setError(err.message);
        setLoading(false);
      });
    // .finally(() => {
    //   setLoading(false);
    // }); NOT WORKING WITH STRICT

    return () => contoller.abort();
  }, []);

  const deleteUser = (user: User) => {
    const originalUsers = [...users];
    setUsers(users.filter((u) => u.id !== user.id));
    axios
      .delete("https://jsonplaceholder.typicode.com/users/" + user.id)
      .then(() => setError(""))
      .catch((err) => {
        setError(err.message);
        setUsers(originalUsers);
      });
  };
  const addUser = () => {
    const newUser: User = {
      id: 2,
      name: "User",
    };
    const originalUsers = [...users];
    setUsers([newUser, ...users]);
    axios
      .post("https://jsonplaceholder.typicode.com/users", newUser)
      .then(({ data: savedUser }) => setUsers([savedUser, ...users]))
      .catch((err) => {
        setError(err.message);
        setUsers(originalUsers);
      });
  };
  const updateUser = (user: User) => {
    const updatedUser = { ...user, name: user.name + "!" };
    const originalUsers = [...users];
    setUsers(users.map((u) => (u.id === user.id ? updatedUser : u)));

    axios
      .patch(
        "https://jsonplaceholder.typicode.com/users/" + user.id,
        updateUser
      )
      .catch((err) => {
        setError(err.message);
        setUsers(originalUsers);
      });
  };
  return (
    <div className="min-h-screen flex lg:flex-row flex-col gap-14 lg:items-start items-center lg:justify-center justify-start">
      <Card className="max-w-lg w-full rounded-xl shadow-lg border border-gray-400 bg-neutral-300 dark:bg-gray-800 dark:border-gray-700">
        <h1 className="text-lg font-bold m-auto">Users</h1>
        {isLoading && <div className="spinner-border">loading</div>}
        <Button
          onClick={addUser}
          className="w-[25%] m-auto"
          variant={"default"}
        >
          Add
        </Button>
        <p className="text-red-400 text-center">{error}</p>
        <ul className="divide-y divide-gray-400 dark:divide-gray-700">
          {users.map((user) => (
            <li
              key={user.id}
              className="flex justify-between py-2 px-4 text-left hover:bg-gray-200 dark:hover:bg-gray-700 transition "
            >
              {user.id}. {user.name}
              <div>
                <Button
                  className="mx-3"
                  onClick={() => updateUser(user)}
                  variant={"outline"}
                >
                  Update
                </Button>
                <Button
                  onClick={() => deleteUser(user)}
                  variant={"destructive"}
                >
                  Delete
                </Button>
              </div>
            </li>
          ))}
        </ul>
      </Card>
    </div>
  );
};

export default BackendPage;
