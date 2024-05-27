import UserProfile from "./components/UserPorfile";
import RegistrationForm from "./components/RegistrationForm";
import { useState } from "react";
export default function App() {
  const [users, setUsers] = useState([
    {
      id: 1,
      username: "johndoe",
      email: "johndoe@email.com",
    },
    {
      id: 2,
      username: "jennydoe",
      email: "jennydoe@email.com",
    },
  ]);

  return (
    <>
      {users.map((user) => {
        return <UserProfile key={user.id} user={user} setUsers={setUsers} />;
      })}

      <RegistrationForm setUsers={setUsers} />
    </>
  );
}
