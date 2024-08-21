import React from "react";

type TypeInput = React.ComponentProps<"input">;

const Input = ({ children, type, id, ...props }: TypeInput) => {
  return (
    <div style={{ margin: "1rem" }}>
      <label htmlFor={id}>{children}</label>
      <input id={id} type={type} {...props}></input>
    </div>
  );
};

export default Input;
