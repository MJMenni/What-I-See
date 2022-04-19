import React from "react";
import { useState, createContext } from "react";

const UserContext = createContext(null);

const anonymousUser = {
  _id: null,
  email: null,
  username: null,
  stats: [],
};

export const UserProvider = ({ children }) => {
  const initialUser = localStorage.getItem("user")
    ? JSON.parse(localStorage.getItem("user"))
    : anonymousUser;
  const [user, setUser] = useState(initialUser);
  const [status, setStatus] = useState("loading");

  return (
    <UserContext.Provider
      value={{
        user,
        status,
        setUser,
        setStatus,
      }}
    >
      {children}
    </UserContext.Provider>
  );
};

export default UserContext;
