import { useLocation } from "react-router-dom";

export default function Blogs() {
  const location = useLocation();
  const state = location.state;
  console.log(state);
  return (
    <div>
      <h1>Blogs</h1>
      {state ? (
        <div>
          <h2>{state.blogs[0].title}</h2>
          <p>{state.blogs[0].content}</p>
        </div>
      ) : (
        <h2>No blog found</h2>
      )}
    </div>
  );
}
