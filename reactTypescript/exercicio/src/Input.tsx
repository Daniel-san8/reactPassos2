import React, { ComponentPropsWithRef, ForwardedRef } from "react";

type PropsInput = {
  id: string;
  type: string;
  label: string;
  inicio?: string;
  final?: string;
};

export interface ApiData {
  data: string | null;
  id: string;
  nome: string;
  pagamento: string;
  parcelas: number | null;
  preco: number;
  status: string;
}

type PropsInputParams = PropsInput &
  ComponentPropsWithRef<"input"> & {
    data: ApiData[] | null;
  };

const Input = React.forwardRef<HTMLInputElement, PropsInputParams>(
  (
    { id, type, label, data, inicio, final, ...props },
    ref: ForwardedRef<HTMLInputElement>
  ) => {
    return (
      <div>
        <label htmlFor={id}>{label}</label>
        <input id={id} type={type} ref={ref} {...props} />
      </div>
    );
  }
);

export default Input;
