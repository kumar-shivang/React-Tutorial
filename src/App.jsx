import UserProfile from "./components/UserPorfile";
export default function App() {
  return (
    <div>
      <h1>Root Component</h1>
      <UserProfile username="user" email="email@email.com" />
    </div>
  );
}
