import React from "react";
import Button from "./Button";

function App() {
  const [total, setTotal] = React.useState(0);

  function incrementar() {
    setTotal((total) => total + 1);
  }
  return (
    <>
      <button onClick={incrementar}>{total}</button>
      {/* <Button tamanho="3rem" /> */}
      <Button onClick={incrementar}>Incrementar 2</Button>
    </>
  );
}

export default App;
