import React from "react";
import { GlobalContext } from "./GlobalContext";

const Produto = () => {
  const globalDados = React.useContext(GlobalContext);
  return (
    <div>
      {globalDados.dados && globalDados.dados[0].nome}
      <button onClick={globalDados.limparDados} style={{ margin: "1rem" }}>
        Clique aqui para limpar os dados
      </button>
    </div>
  );
};

export default Produto;
