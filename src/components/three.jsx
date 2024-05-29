import { useContext } from "react";
import UserContext from "../utils/contexts/userContexts";
export default function Three() {
  const { user, setUser } = useContext(UserContext);
  return (
    <div id="three">
      <h1>Three</h1>
      <p style={{ color: "purple" }}>{user.name}</p>
      <button onClick={() => setUser({ ...user, name: "Jane Doe" })}>
        Change Name
      </button>
    </div>
  );
}
