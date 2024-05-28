import { func } from "prop-types";
import { useState, useEffect } from "react";
export default function App() {
  const [counter, setCounter] = useState(0);
  const [sync, setSync] = useState(false);
  useEffect(() => {
    console.log("useEffect called");
    document.title = `Counter: ${counter}`;
  }, [sync]);
  useEffect(() => {
    // fetch("https://jsonplaceholder.typicode.com/users", {
    //   method: "GET",
    //   headers: {
    //     "Content-Type": "application/json",
    //   },
    // })
    //   .then((response) => response.json())
    //   .then((data) => console.log(data))
    //   .catch((error) => console.log(error));
    const controller = new AbortController();
    async function fetchUsers() {
      try {
        const response = await fetch(
          "https://jsonplaceholder.typicode.com/users",
          {
            method: "GET",
            headers: {
              "Content-Type": "application/json",
            },
            signal: controller.signal,
          },
        );
        const data = await response.json();
        console.log(data);
      } catch (error) {
        console.log(error);
      }
    }
    fetchUsers();
    return () => {
      controller.abort();
    };
  });
  return (
    <>
      <h1>Counter: {counter}</h1>
      <button onClick={() => setCounter(counter + 1)}>Increment</button>
      <button onClick={() => setSync((current) => !current)}>Sync</button>
    </>
  );
}
