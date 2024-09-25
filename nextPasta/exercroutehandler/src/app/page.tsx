"use client";

import { setCookie } from "@/actions/set-cookie";
import { FormEvent } from "react";
// para revalidar o cache por tempo

// export const revalidate = 5;

export default function Home() {
  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const username = event.currentTarget.login.value;
    const senha = event.currentTarget.senha.value;
    const response = await fetch("/api/login", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },

      body: JSON.stringify({ username, senha }),
    });
  }

  function testarServerAction() {
    setCookie("Chave", "testedocookie");
  }

  return (
    <>
      <form onSubmit={testarServerAction}>
        <label htmlFor="login">Login:</label>
        <input type="text" id="login" />

        <br />

        <label htmlFor="senha">Senha:</label>
        <input
          type="password"
          id="senha"
          style={{ marginTop: "2rem", marginBottom: "2rem" }}
        />

        <br />

        <button type="submit">Enviar</button>
      </form>
    </>
  );
}
