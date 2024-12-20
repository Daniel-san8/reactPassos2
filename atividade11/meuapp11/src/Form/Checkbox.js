import React from "react";

const Checkbox = ({ options, value, setValue }) => {
  function handleChange({ target }) {
    if (target.checked) {
      setValue([...value, target.value]);
    } else {
      setValue(value.filter((itemValue) => itemValue !== target.value));
    }
  }
  return (
    <>
      {options.map((option) => {
        return (
          <label key={option}>
            <input
              type="checkbox"
              value={option}
              onChange={handleChange}
              checked={value.includes(option)}
            />
            {option}
          </label>
        );
      })}
    </>
  );
};

export default Checkbox;
