import React from "react";

const Button = (props) => {
  return (
    <button
      style={{
        padding: "1rem",
        backgroundColor: "pink",
        marginRight: "1rem",
        cursor: "pointer",
      }}
      onClick={props.functionButtonOk}
    >
      {props.texto}
    </button>
  );
};

export default Button;
