import React from "react";

const Input = ({ label, id, onChange, value, ...props }) => {
  return (
    <div>
      <label htmlFor={id}>{label}</label>
      <input type="text" id={id} name={id} onChange={onChange} {...props} />
    </div>
  );
};

export default Input;
