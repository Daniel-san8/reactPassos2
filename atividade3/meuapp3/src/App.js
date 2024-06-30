import React from "react";
import Link from "./componentes/form/Link";
import Home from "./Home";

const App = () => {
  const produtos = [
    { nome: "Notebook", propriedades: ["16gb ram", "512gb"] },
    { nome: "Smartphone", propriedades: ["2gb ram", "128gb"] },
  ];

  const meuTextoHome = "Essa é a home do site";
  const meuTituloHome = "Home";
  const meuTituloProdutos = "Produtos";
  const meuTextoProdutos = produtos.map(({ nome, propriedades }) => {
    return (
      <div
        key={nome}
        style={{ padding: "1rem", border: "1px solid", marginTop: "0.6rem" }}
      >
        <h2>{nome}</h2>
        <ul>
          {propriedades.map((prop) => {
            return <li key={prop}>{prop}</li>;
          })}
        </ul>
      </div>
    );
  });

  const { pathname } = window.location;
  return (
    <div>
      <ul>
        <li>
          <Link link="./Home" description="Home" />
        </li>
        <li>
          <Link link="./Produtos" description="Produtos" />
        </li>
      </ul>

      <Home
        texto={
          pathname === "/Home" || pathname === "/"
            ? meuTextoHome
            : meuTextoProdutos
        }
        titulo={
          pathname === "/Home" || pathname === "/"
            ? meuTituloHome
            : meuTituloProdutos
        }
      />
    </div>
  );
};

export default App;
