import { createContext } from "react";

const UserContext = createContext({
  id: 0,
  name: "",
  email: "",
});
export default UserContext;
