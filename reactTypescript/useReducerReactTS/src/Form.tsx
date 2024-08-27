import React from "react";

type State = {
  nome: string;
  email: string;
};

type Action = {
  type: string;
  payload: string;
};

function reducer(state: State, action: Action) {
  console.log(state);
  if (action.type === "setName") {
    return { nome: "Daniel San", email: action.payload };
  }
  return {
    nome: "Daniel",
    email: "danielgdt88@hotmail.com",
  };
}

//dispatch é o nome da função que vai mudar o objeto

const Form = () => {
  const [state, dispatch] = React.useReducer(reducer, { nome: "", email: "" });
  React.useEffect(() => {
    dispatch({ type: "setName", payload: "marina@gmail.com" });
  }, []);
  return (
    <form>
      {state && (
        <p>
          {state.email} ½ {state.nome}
        </p>
      )}
    </form>
  );
};

export default Form;
