import React from "react";

const CheckBox = ({ label }: { label: string }) => {
  const [value, setValue] = React.useState(false);

  //   const handleChange: React.ChangeEventHandler<HTMLInputElement> = (event) => {
  //     setValue(event?.currentTarget.checked);
  //   };
  // se for uma função simples é melhor usar no inline porque já infere os valores
  return (
    <label
      style={{
        padding: "1rem",
        border: value ? "2px solid #8d2" : "2px solid #f70",
      }}
    >
      {label}
      <input
        type="checkbox"
        checked={value}
        onChange={({ currentTarget }) => setValue(currentTarget.checked)}
      />
    </label>
  );
};

export default CheckBox;
