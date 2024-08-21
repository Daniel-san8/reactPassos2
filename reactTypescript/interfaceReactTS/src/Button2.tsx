import React from "react";

type ButtonProp = {
  total: number;
  setTotal: React.Dispatch<React.SetStateAction<number>>;
};

const Button2 = ({ total, setTotal }: ButtonProp) => {
  return (
    <>
      <button onClick={() => setTotal((total) => total + 1)}>
        Incrementar {total}
      </button>
    </>
  );
};

export default Button2;
