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
        console.log(dados);
      } catch (e) {
        console.log(Error(e));
      }
    };
    if (!dados) requisition();
  }, [dados]);

  function limparDados() {
    setDados(null);
  }

  return (
    <GlobalContext.Provider value={{ daniel: "daniel", dados, limparDados }}>
      {children}
    </GlobalContext.Provider>
  );
};
