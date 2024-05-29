import { useState, useEffect } from "react";

export default function useFetchUser(userId) {
  const [data, setData] = useState({});
  const [loading, setLoading] = useState(false);
  const URI = "https://jsonplaceholder.typicode.com/users";
  const controller = new AbortController();
  useEffect(() => {
    setLoading(true);
    fetch(`${URI}/${userId}`, {
      // signal: controller.signal,
    })
      .then((response) => response.json())
      .then((data) => setData(data))
      .catch((err) => console.log(err))
      .finally(
        setTimeout(() => {
          setLoading(false);
        }, 1000),
      );
    return () => {
      // controller.abort();
      setLoading(false);
    };
  }, [userId]);
  return [data, loading];
}
