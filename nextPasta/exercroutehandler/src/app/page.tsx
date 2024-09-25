"use client";

import { FormEvent } from "react";

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
    const json = await response.json();
    console.log(json);
  }

  return (
    <>
      <form onSubmit={handleSubmit}>
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
