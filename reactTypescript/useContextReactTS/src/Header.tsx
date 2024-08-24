import React from "react";
import { useUi } from "./Context";

const Header = () => {
  const { dark, setDark, dadosApi } = useUi();
  return (
    <h1>
      <button onClick={() => setDark(!dark)}>Clique</button>
      {dadosApi && <p>Nome: {dadosApi.data?.nome}</p>}
    </h1>
  );
};

export default Header;
