import React from "react";

const labelStyle: React.CSSProperties = {
  display: "block",
  marginBottom: "1rem",
  fontWeight: "600",
  color: "red",
};

type IDateInput = React.ComponentProps<"input"> & {
  label: string;
};

const DateInput = ({ label, ...props }: IDateInput) => {
  return (
    <div>
      <label style={labelStyle} htmlFor={label}>
        Início
      </label>
      <input id={label} name={label} type="date" {...props} />
    </div>
  );
};

export default DateInput;
