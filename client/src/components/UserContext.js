import React from "react";
import { useState, createContext } from "react";

const UserContext = createContext(null);

const initialState = {
  user: "",
};

export const UserProvider = ({ children }) => {
  const [user, setUser] = useState(initialState);
  const [status, setStatus] = useState("loading");
  const initialUser = localStorage.getItem("user")
    ? JSON.parse(localStorage.getItem("user"))
    : null;
  const [loggedInUser, setLoggedInUser] = useState(initialUser);

  return (
    <UserContext.Provider
      value={{
        user,
        status,
        setUser,
        setStatus,
        loggedInUser,
        setLoggedInUser,
      }}
    >
      {children}
    </UserContext.Provider>
  );
};

export default UserContext;
