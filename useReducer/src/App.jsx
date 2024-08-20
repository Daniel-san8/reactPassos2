import React from "react";
import Exemplo from "./Exemplo";
function reducer(state, action) {
  console.log(action);
  switch (action) {
    case "aumentar":
      return state + 1;
    case "diminuir":
      return state - 1;
    default:
      new Error("deu erro");
  }
  // if (action === "aumentar") return state + 1;
  // if (action === "diminuir") return state - 1;
  // return new Error("Error action não existe");
}
function App() {
  const [state, dispatch] = React.useReducer(reducer, 0);

  return (
    <>
      <button onClick={() => dispatch("aumentar")}>Mais</button>
      <button onClick={() => dispatch("diminuir")}>Menos</button>
      <p>{state}</p>
      <Exemplo />
    </>
  );
}

export default App;
