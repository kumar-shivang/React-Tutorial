import { useState } from "react";
import useDocumentClick from "./utils/hooks/useDocumentClick";
import ToggleElement from "./components/ToggleElement";
export default function App() {
  const [toggle, setToggle] = useState(true);
  useDocumentClick(() => {
    console.log("Document clicked");
  });
  return (
    <div>
      {toggle && <ToggleElement />}
      <button
        onClick={() => {
          setToggle(!toggle);
        }}
      >
        Toggle
      </button>
    </div>
  );
}
