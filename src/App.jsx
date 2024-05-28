import { useState, useEffect } from "react";
export default function App() {
  const [counter, setCounter] = useState(0);
  const [sync, setSync] = useState(false);
  useEffect(() => {
    console.log("useEffect called");
    document.title = `Counter: ${counter}`;
  }, [sync]);
  return (
    <>
      <h1>Counter: {counter}</h1>
      <button onClick={() => setCounter(counter + 1)}>Increment</button>
      <button onClick={() => setSync((current) => !current)}>Sync</button>
    </>
  );
}
