import React from "react";

function App() {
  const [carrinho, setCarrinho] = React.useState(0);
  const [notificacao, setNotificacao] = React.useState(null);
  const memoria = React.useRef();

  function handleClick() {
    setCarrinho(carrinho + 1);
    setNotificacao("Item adicionado ao carrinho");
    clearTimeout(memoria.current);

    memoria.current = setTimeout(() => {
      setNotificacao(null);
    }, 2000);
  }

  return (
    <div>
      <p>{notificacao}</p>
      <button onClick={handleClick}>Total {carrinho}</button>
    </div>
  );
}

export default App;
