import React from "react";
import Produto from "./Produto";

function App() {
  const [ativar, setAtivar] = React.useState(true);
  return (
    <>
      {ativar && <Produto titulo="esse é meu produto" />}
      <button onClick={() => setAtivar(!ativar)}></button>
    </>
  );
}

export default App;
