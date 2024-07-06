import React from "react";

const Input = ({ label, id, setValue, value, ...props }) => {
  return (
    <div>
      <label htmlFor={id}>{label}</label>
      <input
        type="text"
        id={id}
        name={id}
        onChange={({ target }) => {
          setValue(target.value);
        }}
        {...props}
      />
    </div>
  );
};

export default Input;
