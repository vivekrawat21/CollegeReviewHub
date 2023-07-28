"use client";
import React, { createContext, useState } from "react";

export const UserContext = createContext();

export const UserProvider = (props) => {
  const [token, setToken] = useState(null);

  return (
    <UserContext.Provider value={[token, setToken]}>
      {props.children}
    </UserContext.Provider>
  );
};
