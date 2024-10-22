"use client";

import { metodoForm } from "@/metodos/metodoForm";
import { useFormStatus } from "react-dom";

function Button() {
  const status = useFormStatus();
  return (
    <button type="submit" disabled={status.pending}>
      Adicionar
    </button>
  );
}

export default function Home() {
  return (
    <form action={metodoForm}>
      <label htmlFor="email">Email</label>
      <input type="text" id="email" name="email" />
      <label htmlFor="senha">senha</label>
      <input type="password" id="senha" name="senha" />
      <label htmlFor="outroCampo">outro Campo</label>
      <input type="text" id="outroCampo" name="outroCampo" />
      <Button />
    </form>
  );
}
