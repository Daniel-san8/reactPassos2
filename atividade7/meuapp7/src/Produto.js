import React from "react";
import { GlobalContext } from "./GlobalContext";

const Produto = () => {
  const globalDados = React.useContext(GlobalContext);
  if (!globalDados.dados) return null; // Verifica se globalDados.dados não é nulo

  return (
    <div>
      <ul>
        {globalDados.dados.map((produtos) => (
          <li key={produtos.id}>{produtos.nome}</li>
        ))}
      </ul>
      <button onClick={globalDados.limparDados} style={{ margin: "1rem" }}>
        Clique aqui para limpar os dados
      </button>
    </div>
  );
};

export default Produto;

// <ul>
//         {globalDados.dados.map((produto) => (
//           <li key={produto.id}>{produto.nome}</li>
//         ))}
//       </ul>
