import { useEffect } from "react";

export default function useDocumentClick() {
  useEffect(() => {
    const handleClick = (e) => {
      console.log(`You clicked on ${e.target.tagName}`);
      // log position of click
      console.log(`X: ${e.clientX}, Y: ${e.clientY}`);
    };
    document.addEventListener("click", handleClick);
    return () => {
      document.removeEventListener("click", handleClick);
    };
  }, []);
}
