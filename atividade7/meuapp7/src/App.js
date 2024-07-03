import React from "react";
import Produto from "./Produto";
import { GlobalDadosApi } from "./GlobalContext";

const App = () => {
  return (
    <GlobalDadosApi>
      <Produto />
    </GlobalDadosApi>
  );
};

export default App;
