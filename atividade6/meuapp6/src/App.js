import React from "react";
import Button from "./Button";

function App() {
  const [titleText, setTitleText] = React.useState(null);
  const [preco, setPreco] = React.useState(null);

  async function functionButtonOk({ target }) {
    const request = await fetch(
      `https://ranekapi.origamid.dev/json/api/produto/${target.innerText}`
    );
    const requestResponse = await request.json();
    const { nome, preco } = requestResponse;
    setTitleText(nome);
    setPreco(preco);
    localStorage.setItem("Produto", nome);
  }

  React.useEffect(() => {
    setTitleText(localStorage.getItem("Produto"));
  }, []);

  React.useEffect(() => {
    async function pegarPreco() {
      if (titleText) {
        try {
          const request = await fetch(
            `https://ranekapi.origamid.dev/json/api/produto/${titleText}`
          );
          const requestResponse = await request.json();
          const { preco } = requestResponse;
          setPreco(preco);
        } catch (erro) {
          console.log(erro);
        }
      }
    }
    pegarPreco();
  }, [titleText]);

  return (
    <div>
      <h1>Preferência: {titleText}</h1>
      <Button functionButtonOk={functionButtonOk} texto="Smartphone" />
      <Button functionButtonOk={functionButtonOk} texto="Notebook" />
      <div>
        {titleText && <h1>{titleText}</h1>}
        {preco && <p>R$: {preco}</p>}
      </div>
    </div>
  );
}

export default App;
