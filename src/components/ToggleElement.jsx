import { useEffect } from "react";
export default function ToggleElement() {
  useEffect(() => {
    const resizeHandler = () => {
      console.log("resize");
      console.log(window.innerWidth);
      console.log(window.innerHeight);
    };
    window.addEventListener("resize", resizeHandler);
    return () => {
      console.log("unmount");
      window.removeEventListener("resize", resizeHandler);
    };
  });
  return (
    <div>
      <h1>Element</h1>
    </div>
  );
}
