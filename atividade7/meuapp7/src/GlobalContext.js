import React from "react";

export const GlobalContext = React.createContext();

export const GlobalDadosApi = ({ children }) => {
  const [dados, setDados] = React.useState(null);

  React.useEffect(() => {
    const requisition = async () => {
      try {
        const requisitionApi = await fetch(
          "https://ranekapi.origamid.dev/json/api/produto/"
        );
        const requisitionApiJson = await requisitionApi.json();
        setDados((dados) => (dados = requisitionApiJson));
      } catch {
        console.log("err");
      }
      requisition();
    };
  }, []);

  return (
    <GlobalContext.Provider value={{ daniel: "daniel", dados }}>
      {children}
    </GlobalContext.Provider>
  );
};
