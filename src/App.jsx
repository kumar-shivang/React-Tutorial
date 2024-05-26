import UserProfile from "./components/UserPorfile";
import UserUsername from "./components/UserUsername";
export default function App() {
  const mockUsers = [
    { id: 1, username: "user1", email: "user1@email.com" },
    { id: 2, username: "user2", email: "user2@email.com" },
    { id: 3, username: "user3", email: "user3@email.com" },
  ];
  return (
    <div>
      {/* <h1>Root Component</h1> */}
      {/* <UserProfile username="user" email="email@email.com" /> */}
      {mockUsers.map((user) => {
        return (
          <UserProfile
            key={user.id}
            username={user.username}
            email={user.email}
          />
        );
      })}
      ) )
    </div>
  );
}
