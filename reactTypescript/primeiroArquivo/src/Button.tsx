import React from "react";

// type ButtonProps2 = React.PropsWithChildren & ButtonProps;
type ButtonProps2 = React.PropsWithChildren<{
  tamanho?: string;
  onClick?: () => void;
}>;

type ButtonProps = React.ComponentProps<"button"> & {
  tamanho?: string;
};

const Button = ({ tamanho, children, ...props }: ButtonProps) => {
  return (
    <button {...props} style={{ fontSize: tamanho }}>
      {children}
    </button>
  );
};

export default Button;
