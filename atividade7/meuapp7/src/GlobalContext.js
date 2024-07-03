import React from "react";

export const GlobalContext = React.createContext();

export const GlobalDadosApi = ({ children }) => {
  return (
    <GlobalContext.Provider value={{ daniel: "daniel" }}>
      {children}
    </GlobalContext.Provider>
  );
};
