import React from "react";
import useFetch from "./useFetch";

function App() {
  const [id, setId] = React.useState("p001");
  const produtos = useFetch("https://data.origamid.dev/produtos");
  const produto = useFetch(`https://data.origamid.dev/produtos/${id}`);
  return (
    <>
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          maxWidth: "200px",
          gap: "1rem",
        }}
      >
        {produtos.data &&
          Array.isArray(produtos.data) &&
          produtos.data.map((dados) => (
            <button onClick={() => setId(dados.id)} key={dados.id}>
              {dados.id}
            </button>
          ))}
      </div>
      <div>
        {produto.data && (
          <ul key={produto.data.id}>
            <li>{produto.data.id}</li>
            <li>{produto.data.nome}</li>
            <li>{produto.data.preco}</li>
            <li>{produto.data.descricao}</li>
            <li>{produto.data.quantidade}</li>
          </ul>
        )}
      </div>
    </>
  );
}

export default App;
