import React from "react";

function reducer(state, action) {
  switch (action.type) {
    case "remover":
      return state.filter((item) => item !== action.content);
    case "adicionar":
      return [...state, action.content];
    default:
      throw new Error();
  }
}

const Exemplo = () => {
  const [state, dispatch] = React.useReducer(reducer, ["Banana", "Uva"]);

  return (
    <>
      <button onClick={() => dispatch({ type: "remover", content: "Banana" })}>
        Remover banana
      </button>
      <button onClick={() => dispatch({ type: "adicionar", content: "Limão" })}>
        Adicionar limão
      </button>
      <p>{state}</p>
    </>
  );
};

export default Exemplo;
