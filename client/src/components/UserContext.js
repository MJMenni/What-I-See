import React from "react";
import { useState, createContext } from "react";

const UserContext = createContext(null);

const initalUser = {
  _id: null,
  email: null,
  username: null,
  stats: {
    slider: {
      opacity: 0,
      speed: 0,
      size: 0,
    },
    audio: {
      static: false,
      roaring: false,
      buzzing: false,
      kettle: false,
      electric: false,
      screeching: false,
    },
    note: "",
  },
};

export const UserProvider = ({ children }) => {
  const [user, setUser] = useState(initalUser);
  const [status, setStatus] = useState("loading");
  const initialUser = localStorage.getItem("user")
    ? JSON.parse(localStorage.getItem("user"))
    : null;

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
