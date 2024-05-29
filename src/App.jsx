import { useState } from "react";
import UserProfile from "./components/UserProfile";
export default function App() {
  const [userId, setUserId] = useState(1);
  return (
    <div>
      <input
        type="number"
        max={10}
        min={1}
        onChange={(e) => setUserId(e.target.value)}
      />
      <UserProfile userId={userId} />
    </div>
  );
}
