import React from "react";
import GlobalContext from "./GlobalContext";

const Produto = () => {
  const dados = React.useContext(GlobalContext);
  console.log(dados);
};

export default Produto;
