import React from "react";
import { useState, createContext } from "react";

const UserContext = createContext(null);

const anonymousUser = {
  _id: null,
  email: null,
  username: null,
  stats: [
    // {
    //   slider: {
    //     opacity: 0,
    //     speed: 0,
    //     size: 0,
    //   },
    //   audio: {
    //     static: false,
    //     roaring: false,
    //     buzzing: false,
    //     kettle: false,
    //     electric: false,
    //     screeching: false,
    //   },
    //   note: "",
    // },
  ],
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
