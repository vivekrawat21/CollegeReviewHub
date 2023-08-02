"use client";
import React, { createContext, useState, useEffect } from "react";
import PropTypes from "prop-types";

const AuthContext = createContext();

const AuthProvider = ({ children }) => {
  const [token, setToken] = useState(null);

  useEffect(() => {
    const storedToken = localStorage.getItem("token");
    if (storedToken) {
      setToken(storedToken);
    }
  }, []);

  const login = (token) => {
    setToken(token);
    localStorage.setItem("token", token);
  };

  function getCookies() {
    const cookies = document.cookie;

    const cookieArray = cookies.split(";");

    const cookieObject = {};

    for (const cookie of cookieArray) {
      const [name, value] = cookie.trim().split("=");
      cookieObject[name] = decodeURIComponent(value);
    }

    return cookieObject;
  }

  const extractedCookies = getCookies();
  console.log(extractedCookies);

  const logout = () => {
    setToken(null);
    localStorage.removeItem("token");
  };

  const value = {
    token,
    login,
    logout,
  };

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
};

AuthProvider.propTypes = {
  children: PropTypes.node.isRequired,
};

export { AuthContext, AuthProvider };
