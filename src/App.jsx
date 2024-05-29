import { useState } from "react";
import UserProfile from "./components/UserProfile";
import { Outlet, Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
export default function App() {
  const [userId, setUserId] = useState(1);
  const navigate = useNavigate();
  return (
    <div>
      <nav>
        <ul>
          <Link to="/">Home</Link>
          <Link to="/users">Users</Link>
          <Link to="/blogs">Blogs</Link>
        </ul>
      </nav>
      <input
        onChange={(e) => {
          if (e.target.value.length == 10) {
            navigate("/blogs", {
              state: {
                blogs: [
                  {
                    id: 1,
                    title: "hello world",
                    content:
                      "Lorem ipsum dolor sit amet, qui minim labore adipisicing minim sint cillum sint consectetur cupidatat.",
                  },
                ],
              },
            });
          }
        }}
      />
      <UserProfile userId={userId} />
      <Outlet />
    </div>
  );
}
