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
        setDados(() => requisitionApiJson);
      } catch (e) {
        console.log(Error(e));
      }
    };

    if (dados === null) requisition();
  }, []);

  function limparDados() {
    setDados(null);
  }

  return (
    <GlobalContext.Provider value={{ dados, limparDados }}>
      {children}
    </GlobalContext.Provider>
  );
};
