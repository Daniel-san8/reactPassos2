import React from "react";

const ButtonSmartPhone = ({ nomeSmartPhone }) => {
  async function puxaDadosSmartPhone() {
    const requisition = await (
      await fetch("https://ranekapi.origamid.dev/json/api/produto/smartphone")
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
      <button onClick={puxaDadosSmartPhone} style={{ marginLeft: "2rem" }}>
        {nomeSmartPhone}
      </button>
      {nome && <h1>{nome}</h1>}
      {preco && <p>R$: {preco}</p>}
      {srcAtual && <img src={srcAtual} alt="foto"></img>}
    </React.Fragment>
  );
};

export default ButtonSmartPhone;
