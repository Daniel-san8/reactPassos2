import React from "react";

const ButtonNotebook = ({ nomeNotebook }) => {
  async function puxaDadosNotebook() {
    const requisition = await (
      await fetch("https://ranekapi.origamid.dev/json/api/produto/notebook")
    ).json();
    setNome("carregando");
    setPreco("carregando");
    setsrcAtual("carregando");
    const { nome, preco, fotos } = requisition;
    const fotosOk = fotos[0].src;
    const precoFormated = preco.replace(".", ",");
    setNome(nome);
    setPreco(precoFormated);
    setsrcAtual(fotosOk);
    setLoading(!loading);
  }

  let [nome, setNome] = React.useState("");
  let [preco, setPreco] = React.useState("");
  let [srcAtual, setsrcAtual] = React.useState("");
  let [loading, setLoading] = React.useState(false);
  return (
    <React.Fragment>
      <button onClick={puxaDadosNotebook} style={{ marginLeft: "2rem" }}>
        {nomeNotebook}
      </button>
      {!nome && loading && <p>Carregando...</p>}
      {nome && <h1>{nome}</h1>}
      {preco && <p>R$: {preco}</p>}
      {srcAtual && <img src={srcAtual} alt="foto"></img>}
    </React.Fragment>
  );
};

export default ButtonNotebook;
