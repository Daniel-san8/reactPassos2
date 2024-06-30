import React, { useState } from "react";

const ButtonNotebook = ({ nomeNotebook }) => {
  async function puxaDadosNotebook() {
    const requisition = await (
      await fetch("https://ranekapi.origamid.dev/json/api/produto/notebook")
    ).json();
    const { nome } = requisition;
    const { preco } = requisition;
    const { fotos } = requisition;
    const fotosOk = fotos[0].src;
    const precoFormated = preco.replace(".", ",");
    setNome(nome);
    setPreco(precoFormated);
    setsrcAtual(fotosOk);
  }

  let [nome, setNome] = React.useState("");
  let [preco, setPreco] = React.useState("");
  let [srcAtual, setsrcAtual] = React.useState("");
  return (
    <React.Fragment>
      <button onClick={puxaDadosNotebook} style={{ marginLeft: "2rem" }}>
        {nomeNotebook}
      </button>
      <div>
        <h1>{nome}</h1>
        <p>R$: {preco}</p>
        <img src={srcAtual} alt="foto"></img>
      </div>
    </React.Fragment>
  );
};

export default ButtonNotebook;
