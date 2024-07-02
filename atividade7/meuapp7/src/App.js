import React from "react";
import userContext from "./GlobalContext";
import Produto from "./Produto";

function App() {
  return (
    <userContext.Provider value={{ nome: "Daniel" }}>
      <Produto />
    </userContext.Provider>
  );
}

export default App;
