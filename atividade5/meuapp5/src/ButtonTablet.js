import React from "react";

const ButtonTablet = ({ nomeTablet }) => {
  async function puxaDadosTablet() {
    const requisition = await (
      await fetch("https://ranekapi.origamid.dev/json/api/produto/tablet")
    ).json();
    const { nome, preco, fotos } = requisition;
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
      <React.Fragment>
        <button onClick={puxaDadosTablet} style={{ marginLeft: "2rem" }}>
          {nomeTablet}
        </button>
        {nome && <h1>{nome}</h1>}
        {preco && <p>R$: {preco}</p>}
        {srcAtual && <img src={srcAtual} alt="foto"></img>}
      </React.Fragment>
    </React.Fragment>
  );
};

export default ButtonTablet;
