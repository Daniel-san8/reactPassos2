import React from "react";
import { GlobalContext } from "./GlobalContext";

const Produto = () => {
  const globalDados = React.useContext(GlobalContext);
  console.log(globalDados.dados);
  return <div>{globalDados.daniel}</div>;
};

export default Produto;
