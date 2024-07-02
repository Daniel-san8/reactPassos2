import React from "react";

export const userContext = React.createContext();

export const GlobalStorage = ({ children }) => {
  return <userContext.Provider>{children}</userContext.Provider>;
};
