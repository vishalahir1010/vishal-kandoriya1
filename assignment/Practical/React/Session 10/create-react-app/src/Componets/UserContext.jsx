import { createContext } from "react";

const UserContext = createContext({
  username: "Vishal",
  loggedIn: true,
});

export default UserContext;