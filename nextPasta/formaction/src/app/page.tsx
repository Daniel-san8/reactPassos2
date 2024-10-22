"use client";

import { adicionar } from "@/metodos/adicionar";
import { metodoForm } from "@/metodos/metodoForm";
import { useFormState, useFormStatus } from "react-dom";

function Button() {
  const status = useFormStatus();
  return (
    <button type="submit" disabled={status.pending}>
      Adicionar
    </button>
  );
}

export default function Home() {
  const [state, formAction] = useFormState(adicionar, {
    errors: [],
  });
  return (
    <form action={formAction}>
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
