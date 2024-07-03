import React from "react";
import { GlobalContext } from "./GlobalContext";

const Produto = () => {
  const globalDados = React.useContext(GlobalContext);
  return <div>{globalDados.daniel}</div>;
};

export default Produto;
