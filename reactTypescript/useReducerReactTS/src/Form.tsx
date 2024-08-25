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

const Form = () => {
  const [state, dispatch] = React.useReducer(reducer, { nome: "", email: "" });
  React.useEffect(() => {
    dispatch({ type: "setName", payload: "marina@gmail.com" });
  }, []);
  return <form></form>;
};

export default Form;
